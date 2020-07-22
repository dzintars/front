import { html, TemplateResult } from 'lit-element'
// import '../../components/main-taskbar'

export default function template(): TemplateResult {
  return html`
    <div class="container">
      <form id="signin_form" name="signin" novalidate action="">
        <h1>Create account</h1>
        <p>Welcome to Oswee</p>
        <fieldset>
          <label for="user_name">Your name</label>
          <input id="user_name" name="userName" type="text" />
        </fieldset>
        <fieldset>
          <label for="user_email">Email</label>
          <input id="user_email" name="userEmail" type="email" />
        </fieldset>
        <fieldset>
          <label for="password">Password</label>
          <input id="password" autocomplete="off" name="password" type="password" />
        </fieldset>
        <div>
          <p>By creating an account, you agree to Oswee's</p>
          <p>
            <a href="/help/conditions_of_use">Conditions of Use</a>
            and
            <a href="/help/privacy_notice">Privacy Notice</a>
          </p>
          <button class="btn btn--lg btn--block" id="continue">Create your Oswee account</button>
        </div>
        <div>
          <p class="have-account">
            Already have an account?
            <a class="btn btn--lg btn--block" href="/signin">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  `
}
