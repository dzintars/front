import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import '../../components/leaflet-map'
import '../../components/ui-toolbar'
import '../../elements/ui-panel'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    <ui-toolbar>
      <button class="btn btn--md">New Project</button>
      <button class="btn btn--md">New Order</button>
      <button class="btn btn--md">New Route</button>
      <button class="btn btn--md">Import</button>
      <button class="btn btn--md">Delete</button>
      <button class="btn btn--md">Geo-Code</button>
      <button class="btn btn--md">Export</button>
      <button class="btn btn--md">Preview</button>
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
