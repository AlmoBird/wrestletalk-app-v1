import axios from "axios";

let sessionId = 'hsoaok6afjhv6i6mcd0nmvl9i1';

export default axios.create({
  baseURL: 'https://wrestleleague.clientstage.dev/api',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'PHPSESSID=' + sessionId
  }
})

