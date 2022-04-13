import {API_KEY, BASE_URL, URL_CHARACTERS, URL_COMICS} from '../../constants/api';
import { ROOT_INDEX } from '../../constants/root';
import {getComics} from '../../utils/getDataApi';
import Characters from '../Characters/Characters';
import Error from '../Error/Error';

import './Comics.css'

class Comics {
    renderComics(data) {
        let comics = '';
        data.forEach(({id, title, thumbnail: {extension, path}}) => {


            if(!path.includes('image_not_available')) {
                const imgSrc = path + '/' + 'portrait_uncanny' + '.' + extension;
                const uri = BASE_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
            comics += `
            <div class="wrapper">
                <div id="${id}" class="commics" data-uri="${uri}">
                    <img class="img" src="${imgSrc}" alt="foto"/>
                    <div class="name">${title}</div>
                </div>
            </div>
            `
            }
        });
        const commicsBlock = `<div class="commicsBlock">${comics}</div>`;
        ROOT_INDEX.innerHTML = commicsBlock;
        this.eventListener()
    }
    async render() {
        const data = await getComics.getData(BASE_URL + URL_COMICS);
        if(data) {
            this.renderComics(data);
        } else {
            Error.render();
        }
    }
    eventListener() {
        document.querySelector('.commicsBlock')
        .addEventListener('click', async (e) => {
                if(e.target.closest('.commics')) {
                    let url = e.target.closest('.commics').getAttribute('data-uri');
                    const data = await getComics.getCharecters(url);
                    if(data) {
                        Characters.render(data);
                    }
                }
            })
    }
};

export default new Comics();
