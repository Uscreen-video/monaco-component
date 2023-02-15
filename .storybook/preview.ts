import { createLitRenderer, createArgsExtractor } from 'cem-plugin-better-lit-types/storybook'
import { setCustomElementsManifest } from '@storybook/web-components'
import customElements from '../custom-elements.json'

setCustomElementsManifest(customElements);

export const parameters = {
  docs: {
    isFullscreen: true,
    showNav: false,
    extractArgTypes: createArgsExtractor(customElements),
  },
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const render = createLitRenderer({
  wrapSlots: true,
  joinArrays: true
})
