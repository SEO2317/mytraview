import { API_BASE_URL} from "./ApiBaseUrl";

export function call(api, method, req){
    let headers = new Headers({
        "Content-Type" : "application/json"
    });

    let options = {
        headers : headers,
        url : API_BASE_URL + api,
        method : method,

    };

    if(req){
        options.body = JSON.stringify(req)
    }

    return fetch(options.url, options)
    .then((res)=>{
        if(res.ok){
            return res.json();
        } else {
            new Error(res);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

