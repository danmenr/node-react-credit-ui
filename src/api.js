import axios from "axios";
import config from "../config/settings";

class Api {
    constructor()
    {
        this.api = axios.create({baseURL:config.api});
        this.isDev = process.env.NODE_ENV === 'development';
    }

    handleApiErrors(response) {

        const httpStatusCodes = {
            ok: 200,
            badRequest: 400,
            unauthorized: 401,
            notFound: 404,
            internalServerError: 500
          };

        if (response.status !== httpStatusCodes.ok) throw Error(response.statusText);
        return response;
      }

    get = async (url, options) => {
        // environment variables
        if(this.isDev)
            console.log(`HTTP GET - ${url} with ${options.params}`)
        return this.api.get(url, options)
        .then(handleApiErrors)
        .then(response => ({ response }))
        .catch(error => ({ error }));
      }

      post(url, data) {
        // environment variables
        if(this.isDev)
            console.log(`HTTP POST - ${url} with ${data}`)
        return this.api.post(url, data)
        .then(handleApiErrors)
        .then(response => ({ response }))
        .catch(error => ({ error }));
      }
}

// class CreditApi extends from Api {

// }

export default Api;