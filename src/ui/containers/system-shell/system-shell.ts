import { LitElement, customElement, TemplateResult } from 'lit-element'
import template from './template'
import style from './style'

@customElement('system-shell')
export class SystemShellElement extends LitElement {
  protected render(): TemplateResult {
    return template.call(this)
  }
  public static styles = [style]
}
