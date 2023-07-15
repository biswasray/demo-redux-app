import { COUNTER_INCREMENT,COUNTER_DECREMENT,COUNTER_INCREMENT_,COUNTER_DECREMENT_ } from "../actions";

const initialState = {
  count: 0,
};
export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        count: state.count + 1,
      };
    case COUNTER_DECREMENT:
      return {
        count: state.count - 1,
      };
    case COUNTER_INCREMENT_:
      return {
        count: state.count + action.payload.data,
      };
    case COUNTER_DECREMENT_:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}
