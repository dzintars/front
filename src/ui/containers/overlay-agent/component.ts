import { LitElement, customElement, property, TemplateResult } from 'lit-element'
import template from './template'
import style from './style'

@customElement('overlay-agent' as any)
export class OverlayAgentElement extends LitElement {
  public static styles = [style]
  protected render(): TemplateResult {
    return template.call(this)
  }
}
