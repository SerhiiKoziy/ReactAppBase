/* eslint-disable no-console */
import axios from 'axios';

export const API_URL = 'http://api.';

export const getData = async (position: any) => {
  return axios.get(`https://${API_URL}`, {
    params: {

    },
  }).then((response: any) => {

    return response;
  }).catch((error: any) => {
    return console.error(error);
  });
};
