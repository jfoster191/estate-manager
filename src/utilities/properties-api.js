import sendRequest from "./send-request";
const BASE_URL = '/api/properties';

export function addProperty(propertyData){
  return sendRequest(`${BASE_URL}/create`, 'POST', propertyData)
}

export function getProperties(){
  return sendRequest(`${BASE_URL}/index`)
}

export function getPropertyId(id){
  return sendRequest(`${BASE_URL}/${id}`)
}

export function addMaintenanceRequest(maintenanceData){
  return sendRequest(`${BASE_URL}/add-maintenance-request`, 'POST', maintenanceData)
}