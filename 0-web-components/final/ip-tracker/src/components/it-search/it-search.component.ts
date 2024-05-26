import { ipSearchStyles } from './it-search.ts';

class ItSearchComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this._initialize();
    }

    private _initialize(): void {
        this._renderHtmlTemplate();
    }

    private _renderHtmlTemplate(): void {
        this.shadowRoot!.appendChild(this._renderHtml().content.cloneNode(true));
    }

    private _renderHtml(): HTMLTemplateElement {
        const template = document.createElement('template');
        template.innerHTML = `
        ${ipSearchStyles}
        <section class="it-section-search">
  <div class="it-container-search">
    <h1 class="it-text-ip">IP Address Tracker</h1>

    <div class="it-container-input-ip">
      <input class="it-container-input-text"
             type="text"           
             placeholder="Search for any IP address or domain">

      <button type="button" class="it-button-input-text" title="search ip">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/>
        </svg>
      </button>
    </div>

    <div class="it-container-details-ip ">
      <div class="it-container-text-detail animate__bounceIn">
        <p class="it-text-title">ip address</p>
        <p class="it-text-details">192.168.1.1</p>
      </div>

      <div class="it-container-text-detail animate__bounceIn">
        <p class="it-text-title">Location</p>
        <p class="it-text-details">
          US, Mointain
        </p>
      </div>

      <div class="it-container-text-detail animate__bounceIn">
        <p class="it-text-title">Time Zone</p>
        <p class="it-text-details">UTC -08:00</p>
      </div>

      <div class="it-container-text-detail animate__bounceIn">
        <p class="it-text-title">ISP</p>
        <p class="it-text-details">Google LLC</p>
      </div>
    </div>
  </div>
</section> 
        `;
        return template;
    }
}

window.customElements.define('it-search', ItSearchComponent);
