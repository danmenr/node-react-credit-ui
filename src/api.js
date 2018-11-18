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
        this.api.interceptors.response.use(
            response => {
              return response
            },
            error => {
              return Promise.reject(error.response.statusText) // => gives me the server resonse
            }
          )
    }

    handleApiErrors = response => {
        switch(response.status){
            case httpStatusCodes.ok:
                return response;
            case httpStatusCodes.notFound:
                return response.statusText;
            default:
                throw Error(response.statusText);
        }
      }

    get = (url, options) => {
        // environment variables
        if(this.isDev)
            console.log(`HTTP GET - ${url} with ${options.params}`)
        return this.api.get(url, options)
        .then(response => ({ response }))
        .catch(error => ({ error }));
      }

      post = (url, data) =>{
        // environment variables
        if(this.isDev)
            console.log(`HTTP POST - ${url} with ${data}`)
        return this.api.post(url, data)
        .then(response => ({ response }))
        .catch(error => ({ error }));
      }
}

class CreditApi extends Api {
    constructor() {
        super();
        this.users = {
            login: credentials => this.api.post(`users/login`,credentials),
            signUp: userInfo => this.api.post(`users/register`, userInfo)
        }
    }
}

export default new CreditApi();