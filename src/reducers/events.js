import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (evens = {}, action) => {
  switch (action.type) {
	case READ_EVENTS:
	  // keyでデータ扱う
	  return _.mapKeys(action.response.data, 'id')
	default:
	  return evens
  }
}