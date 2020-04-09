import { html, TemplateResult } from 'lit-element'
import { AppHomeElement } from './component'
import '../../components/leaflet-map'

export default function template(this: AppHomeElement): TemplateResult {
  return html`
    <main>
      <leaflet-map></leaflet-map>
    </main>
  `
}
