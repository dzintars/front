import { LitElement, customElement, TemplateResult, css, unsafeCSS, CSSResultArray } from 'lit-element'
import { AppShellElement } from '../../containers/app-shell'
import template from './template'
import style from './style'

@customElement('app-home')
export class AppHomeElement extends LitElement {
  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    // return [super.styles, style, stylex]
    // return unsafeCSS(stylex)
    return [style]
  }
}
