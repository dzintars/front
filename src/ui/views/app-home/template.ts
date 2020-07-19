import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import '../../components/leaflet-map'
import '../../components/ui-toolbar'
import '../../elements/ui-panel'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    <ui-toolbar>
      <button class="btn">New Project</button>
      <button class="btn">New Order</button>
      <button class="btn">New Route</button>
      <button class="btn">Import</button>
      <button class="btn">Delete</button>
      <button class="btn">Geo-Code</button>
      <button class="btn">Export</button>
      <button class="btn">Preview</button>
    </ui-toolbar>
    <main>
      <div class="container left">
        <ui-panel class="projects">Projects</ui-panel>
        <ui-panel class="orders">Orders</ui-panel>
      </div>
      <div class="container right">
        <leaflet-map></leaflet-map>
      </div>
    </main>
  `
}
