import {
  GET_PERITOS,
  GET_CASES,
  GET_PERITOBYNAME,
  SEARCH_CASE,
  SEARCH_PERITO,
  DETAIL_CASE,
  DETAIL_PERITO,
  LOADING_CASE,
  POST_CASE,
  POST_WHATSAPP,
  POST_PERITO,
} from "../utils/constantes";
import {
  createPer,
  createCase,
  updateCases,
  updatePeritos,
  getPer,
  getCases,
  getCasesByCondition,
  deleteItem,
} from "../../Controller/llamados";
const initialState = {
  cases: [],
  peritos: [],
  peritosByName: [],
  selectOptions: {},
};

let rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERITOS:
      
      return {
        ...state,
        peritos: action.payload,
      };
    case GET_CASES:
      return {
        ...state,
        cases: action.payload,
      };
    case GET_PERITOBYNAME:
      const per = [...state.peritos];
      let namePeritos = per.map((el) => {
        return el.nombre;
      });
      return {
        ...state,
        peritosByName: namePeritos,
      };

    default:
      return state;
  }
};

export default rootReducer;
