import {
  COUNTER_DECREMENT,
  COUNTER_DECREMENT_,
  COUNTER_INCREMENT,
  COUNTER_INCREMENT_,
} from ".";

export function increase() {
  return {
    type: COUNTER_INCREMENT,
  };
}
export function decrease() {
  return {
    type: COUNTER_DECREMENT,
  };
}
export function increase_(data) {
  return {
    type: COUNTER_INCREMENT_,
    payload: { data },
  };
}
export function decrease_(data) {
  return {
    type: COUNTER_DECREMENT_,
    payload: { data },
  };
}
