import { ROOT_INDEX } from "../../constants/root";
import './Error.css';

class Error {
    render() {
        const htmlWrapper = `
            <div class="errorBlock">
                <span class="span">
                    <p>Произошла ошибка</p>
                    <p>Попробуйте пойзже</p>
                </span>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
};

export default new Error;