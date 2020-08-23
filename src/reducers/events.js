import _ from 'lodash'
import {
	CREATE_EVENT,
	READ_EVENTS,
	READ_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
		case CREATE_EVENT:
		case READ_EVENT:
		case UPDATE_EVENT:
			// 実装前に取得したいデータをみる
			// console.log(action.response.data)
			// { id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
			const data = action.response.data
			return { ...events, [data.id]: data}
		case READ_EVENTS:
			// keyでデータ扱う
			return _.mapKeys(action.response.data, 'id')
		case DELETE_EVENT:
			console.log(action.id)
			delete events[action.id]
			// 画面更新反映 Spread演算子
			return { ...events }
		default:
			return events
  }
}
