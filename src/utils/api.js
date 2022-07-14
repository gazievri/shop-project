import { API_KEY, API_URL } from "./config.js";

const getGoods = () => {
  return fetch(API_URL, {
    headers: {
      'Authorization': API_KEY,
    }
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}

export { getGoods };
