import { LitElement, customElement, property, TemplateResult, CSSResultArray } from 'lit-element'
import { Module } from '../../../store'
import template from './template'
import style from './style'
import { Theme } from '../../../assets/style'

// @customElement('app-navigation')
export class AppNavigationElement extends LitElement {
  static get is() {
    return 'app-navigation'
  }

  @property({ type: String }) pathname: string
  @property({ type: String }) appid: string = ''
  @property({ type: Array }) modules: Module[] = [{ id: '1', title: 'Module', permalink: '' }]
  @property({ type: String }) name: string = 'component'

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [Theme, style]
  }

  createRenderRoot(): Element | ShadowRoot {
    return this.hasAttribute('noshadow') ? this : super.createRenderRoot()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-navigation': AppNavigationElement
  }
}
