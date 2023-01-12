export function emit(el: HTMLElement, name: string, options?: CustomEventInit) {
  const event = new CustomEvent(name, {
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: {},
    ...options
  });
  el.dispatchEvent(event)
  return event
}


export const stopPropagation = <T extends {} = {}>(func: (event: Event & T ) => void = () => {}) => (e: Event & T) => {
  e.stopPropagation()
  func(e)
}

export const preventDefault = <T extends {} = {}>(func: (event: Event & T) => void = () => {}) => (e: Event & T) => {
  e.preventDefault()
  func(e)
}
