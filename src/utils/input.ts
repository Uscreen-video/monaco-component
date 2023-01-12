import { LitElement } from "lit";

export const createHiddenInput = (
  container: LitElement,
  name: string,
  isCheckbox = false
): HTMLInputElement => {
  const input = document.createElement('input')
  input.name = name
  input.setAttribute('area-hidden', 'true')
  input.tabIndex = -1
  if (isCheckbox) {
    input.type = 'checkbox'
    input.style.display = 'none'
  } else {
    input.type = 'hidden'
  }
  container.appendChild(input)
  return input
}
