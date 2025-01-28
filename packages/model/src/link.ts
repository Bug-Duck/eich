import { defineComponent, effect, toValue, useAttrs } from '@eich/renderer'

export interface LinkAttributes {
  $target?: string
}

export const component = defineComponent<LinkAttributes>((props, children) => {
  const { target } = useAttrs(props, ['target'])
  const a = document.createElement('a')
  effect(() => {
    a.href = toValue(target) ?? children().map(child => child.textContent).join('')
  })
  a.append(...children())
  return a
})
