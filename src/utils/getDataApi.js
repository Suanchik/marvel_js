import axios from "axios";
import {API_KEY} from './../constants/api';

class GetDataApi {
    async getData(url) {
        try {
            const res = await axios.get(url, {
                params: {
                    apikey: API_KEY,
                    limit: 50
                }
            });
            return res.data.data.results;

        } catch (error) {
            return false;
        }
    };
    async getCharecters(url) {
        console.log(url)
        try {
            const res = await axios.get(`${url}`, {
                params: {
                    apikey: API_KEY
                }
            });
            return res.data.data.results;
        } catch (error) {
            return false
        }

    }
};

export const getComics = new GetDataApi();