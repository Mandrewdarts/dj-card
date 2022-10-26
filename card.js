import css from './card.css' assert { type: 'css' };

const html = String.raw;

export class DJCardHTMLElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [css];
    this.shadowRoot.innerHTML = html`
      <div class="card-image">
        <slot name="image"></slot>
      </div>
      <div class="card-title">
        <slot name="title"></slot>
      </div>
      <div class="card-content">
        <slot></slot>
      </div>

      <div class="card-action" part="actions">
        <slot name="actions"></slot>
      </div>
    `;
  }
}

customElements.define('dj-card', DJCardHTMLElement);
