class ItSearchComponent extends HTMLElement {

    constructor() {
        super();
        console.log('My First Page Component');
    }
}

window.customElements.define('it-search', ItSearchComponent);
