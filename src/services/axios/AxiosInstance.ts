import axios from 'axios';

const vtex = axios.create({
  baseURL: window.location.origin,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  }
});


export default vtex;
