import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE,
} from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
