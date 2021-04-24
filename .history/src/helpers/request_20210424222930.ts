import axios from 'axios';

export const request = axios.create({
  baseURL: `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`,
});