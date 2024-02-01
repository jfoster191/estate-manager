import { getToken } from "./users-services";

export default async function sendRequest(url, method = 'GET', payload = null, containsFile = false) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload && containsFile) {
    // options.headers = { 'Content-Type':'multipart/form-data'}
    options.body = payload
  }
  else if (payload){
    options.headers = { 'Content-Type':'application/json'}
    options.body = JSON.stringify(payload);
  }

  const token = getToken()
  if(token){
    options.headers = options.headers || {}
    options.headers.Authorization = `Bearer ${token}`
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}