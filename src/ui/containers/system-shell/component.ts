import { LitElement, customElement, property, TemplateResult } from 'lit-element'
import { connect } from '../../../utils/connect'
import { store, RootState, UiSelectors } from '../../../store'
import template from './template'
import style from './style'
// import { EventPathIncludes } from '../../../utils'

@customElement('system-shell' as any)
export class SystemShellElement extends connect(store, LitElement) {
  @property({ type: Boolean }) isLauncherVisible: boolean = false
  protected render(): TemplateResult {
    return template.call(this)
  }
  public static styles = [style]

  mapState(state: RootState) {
    return {
      isLauncherVisible: UiSelectors.getLauncherVisibility(state),
    }
  }

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
    // this.addEventListener('click', function(e: any) {
    //   if (EventPathIncludes(e, '#main-launcher')) {
    //     console.log('Regular click received', e)
    //   }
    //   console.log('Click received', e)
    // })
  }
}
