import { html, TemplateResult } from 'lit-element'
// import '../../components/main-taskbar'

export default function template(): TemplateResult {
  return html`
    <h1>Sign In</h1>
    <p>Welcome back!</p>
    <form id="signin_form" name="signin" novalidate action="">
      <fieldset>
        <label for="user_email">Email</label>
        <input id="user_email" name="userEmail" type="email" />
      </fieldset>
      <fieldset>
        <label for="password">Password</label>
        <input id="password" autocomplete="off" name="password" type="password" />
      </fieldset>
      <fieldset>
        <button class="btn btn--lg btn--block btn--secondary" id="continue">Sign In</button>
      </fieldset>
      <div>
        <p>
          New to Oswee?
          <a class="btn btn--lg btn--block btn--success" href="/signup" @click="${this.onSignUp}">
            Create your Oswee account
          </a>
        </p>
      </div>
    </form>
    <div class="container"></div>
  `
}
