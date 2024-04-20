import { getfrase } from '../../services/Datafraces';
import styles from './frase.css'

export enum AttributeText {
	
	'fact' = 'fact'
}

class TEXT extends HTMLElement {

	fact?: string


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}


	static get observedAttributes() {
		const attrs: Record<AttributeText, null> = {
	
		fact: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeText, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}
	render(){
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `


      		<secction>
				<P>${this.fact}</P>
			</secction>
            `;
		}
	

	}
}
customElements.define('text-card', TEXT);
export default TEXT;