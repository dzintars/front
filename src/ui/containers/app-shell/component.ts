import { LitElement, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import template from './template'
import style from './style'

@customElement('app-shell')
export class AppShellElement extends LitElement {
  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [style]
  }
}
