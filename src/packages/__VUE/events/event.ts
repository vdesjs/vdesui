

export interface BaseEvent {
    type: string,
    timeStamp: number,
    target: object,
    currentTarget: object,
    mark: object,
}

export interface CustomEvent extends BaseEvent {
    detail: object
}

export interface TouchEvent extends BaseEvent {
    touches: [],
    changedTouches: []
}

export interface Touch {
    identifier: number,
    pageX: number,
    pageY: number,
    clientX: number,
    clientY: number
}