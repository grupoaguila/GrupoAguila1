import axios from "axios";
import { getPer, getCases } from "../../Controller/llamados";
import {
  GET_PERITOS,
  POST_WHATSAPP,
  GET_CASES,
  SEARCH_CASE,
  SEARCH_PERITO,
  GET_PERITOBYNAME,
  DETAIL_CASE,
  DETAIL_PERITO,
  LOADING_CASE,
  POST_CASE,
  POST_PERITO,
} from "../utils/constantes";

export function getPeritos() {
  return async function (dispatch) {
    const allPer = await getPer();
  
    return dispatch({
      type: GET_PERITOS,
      payload: allPer,
    });
  };
}
export function getCasesAction() {
  return async function (dispatch) {
    const allCases = await getCases();
    return dispatch({
      type: GET_CASES,
      payload: allCases,
    });
  };
}
export const searchCase = (payload) => {
  return {
    type: SEARCH_CASE,
    payload,
  };
};
export const SearchPeritos = (payload) => {
  return {
    type: SEARCH_PERITO,
    payload,
  };
};
export function peritosByName() {
  return {
    type: GET_PERITOBYNAME,
  };
}

export function postWhatsapp(body) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        "https://api.ultramsg.com/instance23751/messages/chat",
        body
      );
 
      return dispatch({
        type: POST_WHATSAPP,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getritos = () => {};
export const gPeritos = () => {};
export const geritos = () => {};
export const gritos = () => {};
export const gitos = () => {};
