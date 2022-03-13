import axios from "axios";

let sessionId = 'ooequ0hnm3b6i1o52c96t41ac5';

export default axios.create({
  baseURL: 'https://wrestleleague.clientstage.dev/api',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'PHPSESSID=' + sessionId
  }
})

