import axios from "axios";

export function signUp(data) {
  return axios({
    method: "POST",
    url: `/user/signup`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
}
