import sendRequest from "./send-request";
const BASE_URL = '/api/units';

export function addUnit(unitData){
  return sendRequest(`${BASE_URL}/create`, 'POST', unitData)
}