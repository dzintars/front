import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { Buttons } from '../../assets/style'
import template from './template'
import style from './style'

@customElement('action-center')
export class ActionCenterElement extends LitElement {
  @property({ type: String }) key: string = '9a30119-d673-4978-b393-f608fe28ae07'

  get userFullNameInput() {
    return this.shadowRoot.getElementById('customer_name') as HTMLInputElement
  }

  get userEmailInput() {
    return this.shadowRoot.getElementById('email') as HTMLInputElement
  }

  get userPasswordInput() {
    return this.shadowRoot.getElementById('password') as HTMLInputElement
  }

  get userFullName() {
    // Use the input getter, and get the value property from the input element
    return this.userFullNameInput.value
  }

  get userEmail() {
    // Use the input getter, and get the value property from the input element
    return this.userEmailInput.value
  }

  get userPassword() {
    // Use the input getter, and get the value property from the input element
    return this.userPasswordInput.value
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [Buttons, style]
  }
  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  }
}
