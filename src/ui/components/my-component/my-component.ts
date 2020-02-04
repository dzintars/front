import {
  LitElement,
  customElement,
  property,
  TemplateResult,
} from 'lit-element';
import template from './template';
import style from './style';

@customElement('my-component')
export class MyComponentElement extends LitElement {
  public static styles = [style];
  @property({ type: Boolean, reflect: true }) selected: boolean = false;
  @property({ type: Number }) key: number = 0;
  @property({ type: String }) name: string = 'Dzintars';

  onButtonClick(): void {
    const evt = new CustomEvent('my-component-click', {
      bubbles: true,
      composed: true,
      detail: {
        key: this.key,
        name: this.name,
      },
    });
    this.dispatchEvent(evt);
  }

  protected render(): TemplateResult {
    return template.call(this);
  }
}

declare global {
  interface DocumentEventMap {
    'my-component-click': CustomEvent<MyComponentData>;
  }

  interface HTMLElementTagNameMap {
    'my-component': MyComponentElement;
  }
}

export interface MyComponentData {
  key: number;
  name: string;
}
