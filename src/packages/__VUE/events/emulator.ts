import { TouchEvent, Touch } from './event';

export interface MultiTouchStartPos {
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
  screenX: number;
  screenY: number;
}

let eventTarget: EventTarget | null;

function polyfill() {
  // @ts-ignore
  if (!document.createTouch) {
    // @ts-ignore
    document.createTouch = function (
      view: any,
      target: any,
      identifier: any,
      pageX: number,
      pageY: number,
      screenX: number,
      screenY: number,
      clientX: number,
      clientY: number
    ) {
      // auto set
      if (clientX == undefined || clientY == undefined) {
        clientX = pageX - window.pageXOffset;
        clientY = pageY - window.pageYOffset;
      }

      return new TouchObj(identifier, {
        pageX: pageX,
        pageY: pageY,
        screenX: screenX,
        screenY: screenY,
        clientX: clientX,
        clientY: clientY
      });
    };
  }
  // @ts-ignore
  if (!document.createTouchList) {
    // @ts-ignore
    document.createTouchList = function () {
      const touchList = TouchList();
      for (var i = 0; i < arguments.length; i++) {
        touchList[i] = arguments[i];
      }
      touchList.length = arguments.length;
      return touchList;
    };
  }
}
function TouchList() {
  const touchList: any = [];

  touchList.item = function (index: number) {
    return this[index] || null;
  };

  // specified by Mozilla
  touchList.identifiedTouch = function (id: number) {
    return this[id + 1] || null;
  };

  return touchList;
}

function hasTouchSupport() {
  return (
    'ontouchstart' in window || // touch events
    //@ts-ignore
    (window.Modernizr && window.Modernizr.touch) || // modernizr
    (navigator.msMaxTouchPoints || navigator.maxTouchPoints) > 2
  ); // pointer events
}

function preventMouseEvents(ev: Event) {
  ev.preventDefault();
  ev.stopPropagation();
}

/**
 * create a touchList based on the mouse event
 * @param mouseEv
 * @returns {TouchList}
 */
function createTouchList(mouseEv: MouseEvent) {
  var touchList = TouchList();

  touchList.push(new TouchObj(1, mouseEv, 0, 0));

  return touchList;
}

/**
 * receive all active touches
 * @param mouseEv
 * @returns {TouchList}
 */
function getActiveTouches(mouseEv: MouseEvent, eventName: string) {
  // empty list
  if (mouseEv.type == 'mouseup') {
    return TouchList();
  }

  var touchList = createTouchList(mouseEv);
  if (mouseEv.type != 'mouseup' && eventName == 'touchend') {
    touchList.splice(1, 1);
  }
  return touchList;
}

/**
 * receive a filtered set of touches with only the changed pointers
 * @param mouseEv
 * @param eventName
 * @returns {TouchList}
 */
function getChangedTouches(mouseEv: MouseEvent, eventName: string) {
  var touchList = createTouchList(mouseEv);

  // we only want to return the added/removed item on multitouch
  // which is the second pointer, so remove the first pointer from the touchList
  //
  // but when the mouseEv.type is mouseup, we want to send all touches because then
  // no new input will be possible
  if (
    mouseEv.type != 'mouseup' &&
    (eventName == 'touchstart' || eventName == 'touchend')
  ) {
    touchList.splice(0, 1);
  }

  return touchList;
}

let startTime: number;
let endTime: number;
/**
 * only trigger touches when the left mousebutton has been pressed
 * @param touchType
 * @returns {Function}
 */
function onMouse(touchType: string) {
  return function (ev: MouseEvent) {
    // prevent mouse events
    // preventMouseEvents(ev);

    // The EventTarget on which the touch point started when it was first placed on the surface,
    // even if the touch point has since moved outside the interactive area of that element.
    // also, when the target doesnt exist anymore, we update it
    if (
      ev.type == 'mousedown' ||
      !eventTarget ||
      (eventTarget && !eventTarget.dispatchEvent)
    ) {
      eventTarget = ev.target;
    }

    if (touchType == 'touchstart') {
      startTime = new Date().getTime();
    } else if (touchType == 'touchend') {
      endTime = new Date().getTime();

      if (endTime - startTime <= 350) {
        triggerTouch('tap', ev);
      } else {
        triggerTouch('longpress', ev);
      }
    }

    triggerTouch(touchType, ev);

    // reset
    if (ev.type == 'mouseup') {
      eventTarget = null;
    }
  };
}

/**
 * trigger a touch event
 * @param eventName
 * @param mouseEv
 */
function triggerTouch(eventName: string, mouseEv: MouseEvent) {
  let touchEvent: any = document.createEvent('Event');
  touchEvent.initEvent(eventName, true, true);

  touchEvent.touches = getActiveTouches(mouseEv, eventName);
  touchEvent.targetTouches = getActiveTouches(mouseEv, eventName);
  touchEvent.changedTouches = getChangedTouches(mouseEv, eventName);

  eventTarget?.dispatchEvent(touchEvent);
}

export function TouchEmulator() {
  if (hasTouchSupport()) {
    return;
  }
  polyfill();

  window.addEventListener('mousedown', onMouse('touchstart'), true);
  window.addEventListener('mousemove', onMouse('touchmove'), true);
  window.addEventListener('mouseup', onMouse('touchend'), true);
}

class TouchObj implements Touch {
  identifier: number;
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;

  constructor(
    identifier: number,
    pos: MultiTouchStartPos,
    deltaX?: number,
    deltaY?: number
  ) {
    deltaX = deltaX || 0;
    deltaY = deltaY || 0;

    this.identifier = identifier;
    this.clientX = pos.clientX + deltaX;
    this.clientY = pos.clientY + deltaY;
    this.pageX = pos.pageX + deltaX;
    this.pageY = pos.pageY + deltaY;
  }
}
