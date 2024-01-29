import sendRequest from "./send-request";
const BASE_URL = '/api/units';

export function addUnit(unitData){
  return sendRequest(`${BASE_URL}/create`, 'POST', unitData)
}

export function getUnitById(id){
  return sendRequest(`${BASE_URL}/${id}`)
}

export function getUpcomingRents(){
  return sendRequest(`${BASE_URL}/upcoming-rents`)
}