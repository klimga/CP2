import { getText } from '../../services/datafetch';
import styles from './img.css';

export enum AttributeImg {
	
	'img' = 'img'
}

class IMG extends HTMLElement {

	img?: string


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}


	static get observedAttributes() {
		const attrs: Record<AttributeImg, null> = {
	
		img: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeImg, oldValue: string | undefined, newValue: string | undefined) {
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
				<h1>Cats Pretty</h1>
					<div>
						<img src="${this.img}" alt="Un gato que hace cosas de gato, pero con un frase en el"
					</div>
			</secction>
            `;
		}
	

	}
}
customElements.define('img-card', IMG);
export default IMG;