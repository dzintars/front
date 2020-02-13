import { LitElement, customElement, property, TemplateResult } from 'lit-element'
import template from './template'
import style from './style'

@customElement('system-shell' as any)
export class SystemShellElement extends LitElement {
  protected render(): TemplateResult {
    return template.call(this)
  }
  public static styles = [style]

  // Intercept custom events from child components and call Redux action (works only if store is connected)
  // mapEvents() {
  //   return {
  //     // 'launcher-click': (e: CustomEvent) => UserActions.selectUser(e.detail.key),
  //     'launcher-click': (e: CustomEvent) => {
  //       console.log(e)
  //     },
  //   }
  // }

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
    document.addEventListener('launcher-click', function(e) {
      console.log('launcher-click received', e)
    })
  }
}
