import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getContacts = createAsyncThunk(
  "contacts/getAll",
  async function (_, { dispatch }) {
    dispatch(getContactsLoading());
    const res = await fetch("http://localhost:9999/");
    const data = await res.json();
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async function (data, { dispatch }) {
    const res = await fetch("http://localhost:9999/add");
    res;
    dispatch(getContacts());
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getContactsLoading(state) {
      return {
        ...state,
        loading: true,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(getContacts.rejected, (state, action) => {
     console.log(action) 
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    });
  },
});

const { getContactsLoading } = contactsSlice.actions;
export default contactsSlice.reducer;
