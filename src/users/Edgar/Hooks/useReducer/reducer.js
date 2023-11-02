import { FILL_ARRAY, SUM_OF_ARRAY } from './actionTypes';

export const initialValue = {
  data: [],
  sum: 0,
  lastAction: ""
}

export default function reducer(state = initialValue, { type, payload }) {
  switch (type) {
    case FILL_ARRAY: return fillArray(state, payload.quantity);
    case SUM_OF_ARRAY: return sumOfArray(state)

    default: return state
  }
}

function sumOfArray(state) {
  const sum = state.data.reduce((a, b) => a + b, 0);
  return {
    ...state,
    sum,
    lastAction: SUM_OF_ARRAY
  }
}

function fillArray(state, quantity) {
  const result = new Array(quantity).fill().map((_, index) => index + 1)
  return {
    ...state,
    data: result,
    lastAction: FILL_ARRAY
  }
}

