// viewの投影するための仕組み??
import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// ref: https://github.com/reduxjs/redux-thunk
// 関数を返すことができる
export const readEvents = () => async despatch => {	
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response.config)
  console.log(response)
  console.log(response.data[0]) 
  console.log(response.data[0]['body'], "id: " +response.data[0]['id']) 
  despatch({type: READ_EVENTS})
}

