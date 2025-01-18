import { defineComponent, template } from '@eich/renderer'

const tmpl = template`<slot name="line-chart-y-label">${0}</slot>`

export default defineComponent((_, children) => {
  return tmpl([children()])
})
