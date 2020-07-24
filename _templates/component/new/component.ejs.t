---
to: src/ui/components/<%= tag %>/component.ts
---
<%
  className = h.changeCase.pascal(tag) + 'Element'
-%>
import { LitElement, customElement, property, TemplateResult } from 'lit-element'
import template from './template'
import style from './style'

@customElement('<%= tag %>')
export class <%= className %> extends LitElement {
  public static styles = [style]
  @property({ type: Boolean, reflect: true }) selected: boolean = false
  @property({ type: Number }) key: number = 0
  @property({ type: String }) name: string = 'Component'

  protected render(): TemplateResult {
    return template.call(this)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '<%= tag %>': <%= className %>
  }
}

export interface ComponentData {
  key: number
  name: string
}

