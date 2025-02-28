
import {
  builtins,
  createDelegate,
  defineComponent,
} from '@eichjs/renderer'

export interface ButtonAttributes {
  '@click': string
}

const component = defineComponent(
  (attrs: ButtonAttributes, children) => {
    const delegate = createDelegate(attrs)

    const button = document.createElement('button')
    button.append(...children())

    
    delegate(button)
    return button
  },
)

builtins.set('button', component)

export default component
