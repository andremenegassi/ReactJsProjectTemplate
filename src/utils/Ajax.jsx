
const baseURL = "http://localhost:60491/api/"


export const ajax = (method, action, body, includeAccessToken) =>{


    console.log(includeAccessToken);
    var config = {
        method: method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": includeAccessToken ? "Bearer " +  localStorage.getItem("accessToken") : ""
        },
        body: body != null ? JSON.stringify(body) : null
    };
    
    let p = fetch(baseURL + action, config);

    return p;


}

export const ajaxAsync = async (method, action, body, includeAccessToken) =>{

    var config = {
        method: method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": includeAccessToken ? "Bearer " +  localStorage.getItem("accessToken") : ""
        },
        body: body != null ? JSON.stringify(body) : null
    };
    
    let p = await fetch(baseURL + action, config);

    return p;


}


