import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import '../../components/leaflet-map'
import '../../components/ui-toolbar'
import '../../elements/ui-panel'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    <ui-toolbar>
      <button>New</button>
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
