import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
	case READ_EVENTS:
	  // 取り出したい形にkeyのobject
	  /* {
	       0: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."},
	       1: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
	     }
	  */
	  console.log(action.response.data)// 配列
	  // この方法でデータを扱いたい
	  console.log(_.mapKeys(action.response.data, 'id')) // keyでobject
      return state
	default:
	  return state
  }
}