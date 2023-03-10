import {API_URL} from '../utils/constants';

export async function getAllItems() {
  const response = await fetch(API_URL);
  return response.json();
}
