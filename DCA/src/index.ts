import IMG, { AttributeImg } from './components/img-custom/img';
import { getText } from './services/datafetch';
import TEXT, { AttributeText } from './components/text-custom/text';
import { getfrase } from './services/Datafraces';
class AppContainer extends HTMLElement {
    

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	
	async connectedCallback() {
       

        const datafrase = await getfrase();
		this.render(datafrase);

        
	}

	render(datafrase:any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
          <img-card></img-card>
            `;
        }
			const frase = this.ownerDocument.createElement('text-card') as TEXT;
			frase.setAttribute(AttributeText.fact, datafrase);
			this.shadowRoot?.appendChild(frase); 
        
    }
}

customElements.define('app-container', AppContainer);
