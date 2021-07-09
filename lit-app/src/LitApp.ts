import { LitElement, html, property } from 'lit-element';
import './design-system/components/h1-title';
import './design-system/components/editable-inline-text';

export class LitApp extends LitElement {
  @property({ type: String }) title = 'My todo list';

  render() {
    return html`
      <main>
        <h1-title>${this.title}</h1-title>
        <editable-inline-text>Temp</editable-inline-text>
      </main>
    `;
  }
}
