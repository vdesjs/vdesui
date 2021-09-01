import { reactive } from 'vue';

export const hoverProps = {
  hoverClass: {
    type: String,
    default: 'none'
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
  },
  hoverStartTime: {
    type: [Number, String],
    default: 50
  },
  hoverStayTime: {
    type: [Number, String],
    default: 400
  }
};

export function useHover(props) {
  const { hoverStartTime, hoverStayTime, hoverStopPropagation, hoverClass } =
    props;
  const touchData = reactive({
    hoverTouch: false,
    hovering: false
  });

  let hoverStartTimer;
  const hoverTouchStart = (event: Event) => {
    if (hoverStopPropagation) {
      event.stopPropagation();
    }
    if (hoverClass == 'none') {
      return;
    }

    touchData.hoverTouch = true;
    hoverStartTimer = setTimeout(() => {
      touchData.hovering = true;
      if (!touchData.hoverTouch) {
        // 防止在hoverStartTime时间内触发了 touchend
        Reset();
      }
    }, hoverStartTime);
  };

  let hoverStayTimer;
  const Reset = () => {
    clearTimeout(hoverStayTimer);
    hoverStayTimer = setTimeout(() => {
      touchData.hovering = false;
    }, hoverStayTime);
  };
  const hoverTouchEnd = (event: Event) => {
    touchData.hoverTouch = false;
    if (touchData.hovering) {
      Reset();
    }
  };

  const renderHoverClass = () => {
    const { hoverClass } = props;
    return touchData.hovering ? hoverClass : '';
  };

  return {
    hoverTouchEnd,
    hoverTouchStart,
    renderHoverClass
  };
}
