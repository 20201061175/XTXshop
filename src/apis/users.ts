import { httpInstance } from "../utils/http"


// heima290
// hm#qd@23!
export const loginAPI = ({account, password}) => {
  return httpInstance({
    url: './login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}