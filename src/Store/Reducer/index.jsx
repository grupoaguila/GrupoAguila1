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
} from "../../assets/Controller/llamados";
const initialState = {
  cases: [],
  peritos: [],
  peritosByName: [],
  selectOptions: {},
};

let rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERITOS:
      console.log("reducerEntre");

      console.log("allPerReducer", action.payload);
      return {
        ...state,
        peritos: action.payload,
      };
    case GET_CASES:
      console.log("reducerEntrecases");

      console.log("allCasesReducer", action.payload);
      return {
        ...state,
        cases: action.payload,
      };
    case GET_PERITOBYNAME:
      const per = [...state.peritos];
      console.log("peritosCopia", per);
      let namePeritos = per.map((el) => {
        return el.nombre;
      });
      console.log("namePeritosReducer", namePeritos);
      return {
        ...state,
        peritosByName: namePeritos,
      };

    default:
      return state;
  }
};

export default rootReducer;
