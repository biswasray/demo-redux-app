import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE
  } from ".";
  
  export function getContactsLoading() {
    return {
      type: GET_CONTACTS,
    };
  }
  export function getContactsSuccess(data) {
    return {
      type: GET_CONTACTS_SUCCESS,
      payload: data
    };
  }
  export function getContactsFailure(error) {
    return {
      type: GET_CONTACTS_FAILURE,
      payload: error
    };
  }

  export function getContacts() {
    return async function (dispatch) {
        dispatch(getContactsLoading());
        try {
            const res=await fetch("http://localhost:9999/");
            const data = await res.json();
            dispatch(getContactsSuccess(data));
        }
        catch(error) {
            dispatch(getContactsFailure(error));
        }
    } 
  }