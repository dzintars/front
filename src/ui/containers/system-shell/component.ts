import { LitElement, customElement, property, TemplateResult } from 'lit-element'
import template from './template'
import style from './style'

@customElement('system-shell' as any)
export class SystemShellElement extends LitElement {
  @property({ type: Number }) key: number = 0
  @property({ type: String }) name: string = 'Dzintars'
  protected render(): TemplateResult {
    return template.call(this)
  }
  public static styles = [style]

  ctrlShiftP(): void {
    const evt = new CustomEvent('ctrl-shift-p-click', {
      bubbles: true,
      composed: true,
      detail: {
        key: this.key,
        name: this.name,
      },
    })
    console.log(evt)
    this.dispatchEvent(evt)
  }

  connectedCallback() {
    super.connectedCallback()
    // https://stackoverflow.com/a/37559790/6651080
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode === 80) {
        e.stopPropagation()
        e.preventDefault()
        console.log(e)
      }
    })
  }
}
