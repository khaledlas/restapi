import { GETCONTACTS, GETONECONTACT } from "../actionTypes/ContactTypes";
import axios from "axios";
//ancienne methode avant l'utilisation du middleware
// export const getcontacts = () => {
//   return { type: GETCONTACTS, payload: };
// };
export const getcontacts = () => async (dispatch) => {
  try {
    //envoyer une requete au back
    const res = await axios.get("/api/contact/getcontacts");
    //envoyer au reducer grace à l'action dispatch
    dispatch({ type: GETCONTACTS, payload: res.data }); // message contenant un tableau des contacts
  } catch (error) {
    console.log(error);
  }
};

export const addContact = (newContact) => async (dispatch) => {
  try {
    const res = await axios.post("/api/contact/", newContact);

    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/contact/deletecontact/${id}`);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};

export const editContact = (id, updateContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/updatecontact/${id}`, updateContact);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};

export const getonecontact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GETONECONTACT, payload: res.data }); //{msg,OneContact}
  } catch (error) {
    console.log(error);
  }
};
