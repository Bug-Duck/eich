import { builtins, defineComponent, effect, toValue, useAttrs } from '@eich/renderer'

export interface LinkAttributes {
  target: string
}

const component = defineComponent<LinkAttributes>((props, children) => {
  const { target } = useAttrs(props, ['target'])
  const a = document.createElement('a')
  effect(() => {
    a.href = toValue(target)!
  })
  a.append(...children())
  return a
})

builtins.set('link', component)

export default component
