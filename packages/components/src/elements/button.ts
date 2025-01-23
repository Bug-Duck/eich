import { animateWithAttrs, animation } from '@eich/animation'
import {
  createDelegate,
  defineComponent,
  builtins,
} from '@eich/renderer'

export interface ButtonAttributes {
  '@click': string
}

const component = defineComponent(
  (attrs: ButtonAttributes, children) => {
    const delegate = createDelegate(attrs)

    const button = document.createElement('button')
    button.append(...children())

    animateWithAttrs(attrs, animation, button)()
    delegate(button)
    return button
  },
)

builtins.set('button', component)

export default component
