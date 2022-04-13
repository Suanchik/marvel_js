import {ROOT_MODAL} from './../../constants/root';
import img from './../img/cancel.png'

import './Characters.css'

class Characters {
    render(characters) {
        let charactersBlock = '';
        if(characters.length) {
            characters.forEach(el => {
                const imgSrc = el.thumbnail.path + '/' + 'portrait_uncanny' + '.' + el.thumbnail.extension;
                charactersBlock += `
                    <div class="charactersEl">
                        <img class="charactersEl_img" src="${imgSrc}" alt="img"/>
                        <div class="charactersEl_name">
                            ${el.name}
                        </div>
                    </div>
                `;
            });
        } else {
            charactersBlock = '<div class="none">нет данных</div>'
        }
        
        const charactersContainer = `
        <div class="modal"><div class="charactersContainer">${charactersBlock} <img class="close" src="${img}" /></div></div>
        `;

        ROOT_MODAL.innerHTML = charactersContainer;
        this.close();

    }
    close() {
        document.querySelector('.close').addEventListener('click', () => {
            ROOT_MODAL.innerHTML = ''
        })
    }
};

export default new Characters();