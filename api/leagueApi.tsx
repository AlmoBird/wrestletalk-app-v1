import axios from "axios";

let sessionId = '5aisll2gbocnbj9ssok3plalrj';

export default axios.create({
  baseURL: 'https://wrestleleague.clientstage.dev/api',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'PHPSESSID=' + sessionId
  }
})

