import sendRequest from "./send-request";
const BASE_URL = '/api/units';

export function getUnits(){
  return sendRequest(`${BASE_URL}/index`)
}

export function addUnit(unitData){
  return sendRequest(`${BASE_URL}/create`, 'POST', unitData)
}

export function getUnitById(id){
  return sendRequest(`${BASE_URL}/${id}`)
}

export function getUpcomingRents(){
  return sendRequest(`${BASE_URL}/upcoming-rents`)
}

export function addServiceRequest(serviceData){
  return sendRequest(`${BASE_URL}/add-service-request`, 'POST', serviceData)
}

export function addFile(payload){
  return sendRequest(`${BASE_URL}/add-file`, 'POST', payload, true)
}

export function updateUnit(unitData){
  return sendRequest(`${BASE_URL}/update-unit`, 'POST', unitData)
}

export function addTenant(tenantData){
  return sendRequest(`${BASE_URL}/add-tenant`, 'POST', tenantData)
}