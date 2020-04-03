import { LitElement, property, customElement, TemplateResult, CSSResultArray } from 'lit-element'
import { themeLight, themeDark } from '../../assets/style'
import template from './template'
import style from './style'

@customElement('theme-toggle')
export class ThemeToggleElement extends LitElement {
  @property({ type: String }) btnTitle: string = ''

  constructor() {
    super()
    this.btnTitle = 'Theme Toggler'
  }

  toggleTheme() {
    let theme
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark')
      theme = themeDark
      this.btnTitle = 'Light'
    } else if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light')
      theme = themeLight
      this.btnTitle = 'Dark'
    }
    this.dispatchEvent(
      new CustomEvent('update-theme', {
        bubbles: true,
        composed: true,
        detail: theme,
      })
    )
  }

  connectedCallback() {
    super.connectedCallback()
    if (localStorage.getItem('theme') === 'light') {
      this.btnTitle = 'Dark'
    } else if (localStorage.getItem('theme') === 'dark') {
      this.btnTitle = 'Light'
    }
  }

  protected render(): TemplateResult {
    return template.call(this)
  }

  public static get styles(): CSSResultArray {
    return [style]
  }
}
