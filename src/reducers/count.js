import { INCREMENT, DECREMENT } from '../actions'

const initalSrate = { value: 0 }

export default (state = initalSrate, action) => {
	swith (action.type) {
		case INCREMENT:
			return {value: state.value + 1 }
		case DECREMENT:
			return {value: state.value - 1 }
		default:
			return state
	}
}