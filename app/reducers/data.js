import { FETCH_HELLO } from '../actions/data';

export default function data(state = { data: [], message: '' }, action) {
	let newState = state ;
  switch (action.type) {
    case FETCH_HELLO:
      return { data: [...state.data], message: action.payload };
    default:
      return state;
  }
}
