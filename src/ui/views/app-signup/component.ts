import { customElement, TemplateResult, CSSResult } from 'lit-element'
import { AppShellElement } from '../../containers/app-shell'
import template from './template'
import style from './style'

@customElement('app-signup')
export class AppSignupElement extends AppShellElement {
  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): any {
    return [super.styles, style]
  }
}
