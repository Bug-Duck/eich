import { eich } from "eichjs"

const app = document.querySelector<HTMLDivElement>('#app')!
app.append(...eich`
<eich>
  <var key="list" $value="[1,2,3]" />
  <for key="item" $in="list">
    <value $data="item" />
  </for>
  <container>
    <button @click="list.push(list.length + 1)">Add</button>
    <button @click="list.pop()">Remove</button>
    <button @click="list = 'Love you!'">Love</button>
    <button @click="list = [1,2,3]">un-love</button>
  </container>
  <input model="name" />
  <value $data="name" />
  <for key="x" $in="list">
    <column>
      <for key="y" $in="list">
        <row>
          <value $data="x + y" />
        </row>
      </for>
    </column>
  </for>
  <line-chart
    $width="900"
    $height="600"
    $data="[
      { x: 1, y: 2 },
      { x: 333, y: 34 },
      { x: 4000, y: 4 },
      { x: 4000, y: 4000 },
      { x: 4000, y: 3000 },
      { x: 4000, y: 2000 },
      { x: 4000, y: 1000 },
      { x: 4000, y: 500 },
      { x: 4000, y: 100 },
    ]"
    x-key="x"
    y-key="y"
    curve="natural"
  >
    <line-chart-title>Fuck you</line-chart-title>
    <line-chart-x-label>Fuck you</line-chart-x-label>
    <line-chart-y-label>Fuck you</line-chart-y-label>
  </line-chart>
</eich>
`)
