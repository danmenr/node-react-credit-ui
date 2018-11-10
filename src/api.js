import axios from "axios";
import config from "config/settings.json";

const httpStatusCodes = {
    ok: 200,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    internalServerError: 500
  };
class Api {
    constructor()
    {
        this.api = axios.create({baseURL:config.api});
        this.isDev = process.env.NODE_ENV === 'development';
    }

    handleApiErrors = response => {
        if (response.status !== httpStatusCodes.ok) throw Error(response.statusText);
        return response;
      }

    get = (url, options) => {
        // environment variables
        if(this.isDev)
            console.log(`HTTP GET - ${url} with ${options.params}`)
        return this.api.get(url, options)
        .then(this.handleApiErrors)
        .then(response => ({ response }))
        .catch(error => ({ error }));
      }

      post = (url, data) =>{
        // environment variables
        if(this.isDev)
            console.log(`HTTP POST - ${url} with ${data}`)
        return this.api.post(url, data)
        .then(this.handleApiErrors)
        .then(response => ({ response }))
        .catch(error => ({ error }));
      }
}

class CreditApi extends Api {
    constructor() {
        super();
        this.users = {
            login: credentials => this.api.post(`users/login`,credentials)
        }
    }
}

export default new CreditApi();