import './monaco-component'

export default {
  title: 'Monaco Editor',
  component: 'monaco-editor',
}

export const Default = {
  args: {
    'line-numbers': true,
    minimap: true,
    value: `
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
    `,
  }
}
