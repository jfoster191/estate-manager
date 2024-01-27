import sendRequest from "./send-request";
const BASE_URL = '/api/properties';

export function addProperty(propertyData){
  return sendRequest(`${BASE_URL}/create`, 'POST', propertyData)
}

export function getProperties(){
  return sendRequest(`${BASE_URL}/index`)
}