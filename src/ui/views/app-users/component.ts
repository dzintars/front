import { customElement, TemplateResult, property, CSSResultArray } from 'lit-element'
import { AppShellElement } from '../../containers/app-shell'
import template from './template'
import style from './style'

@customElement('app-users')
export class AppUsersElement extends AppShellElement {
  protected render(): TemplateResult {
    return template.call(this) // Don't pass whole "this"
  }

  public static get styles(): CSSResultArray {
    // return [super.styles, style]
    return [AppShellElement.styles, style]
  }
}
