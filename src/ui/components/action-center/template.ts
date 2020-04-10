import { html, TemplateResult } from 'lit-element'
import { ActionCenterElement } from './component'
import { Icon } from '../../assets/svg'

export default function template(this: ActionCenterElement): TemplateResult {
  return html`
    <main>
      <nav>
        <button>${Icon('user', 'Account')}</button>
      </nav>
      <div>
        <div class="container">
          <form id="signup_form" name="signup" method="POST" novalidate action="">
            <h1>Create account</h1>
            <input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" />
            <div class="fieldset">
              <label for="customer_name">Your name</label>
              <input id="customer_name" name="customerName" type="text" tabindex="1" />
            </div>
            <div class="fieldset">
              <label for="email">Email</label>
              <input id="email" name="email" type="text" tabindex="2" />
            </div>
            <div class="fieldset">
              <label for="password">Password</label>
              <input id="password" autocomplete="off" name="password" type="password" tabindex="3" />
            </div>
            <div class="fieldset">
              <p>By creating an account, you agree to Hooli's</p>
              <p>
                <a href="/help/conditions_of_use" tabindex="4">Conditions of Use</a>
                and
                <a href="/help/privacy_notice" tabindex="5">Privacy Notice</a>
              </p>
              <input id="continue" type="submit" value="Create your Hooli account" tabindex="6" />
            </div>
            <div>
              <p class="have-account">
                Already have an account?
                <a href="/signin" tabindex="7">Sign in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  `
}
