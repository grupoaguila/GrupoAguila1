import { getPer, getCases } from '../../assets/Controller/llamados';
import {GET_PERITOS, GET_CASES, SEARCH_CASE, SEARCH_PERITO, GET_PERITOBYNAME, DETAIL_CASE, DETAIL_PERITO,LOADING_CASE,POST_CASE, POST_PERITO} from '../utils/constantes'

export function getPeritos (){
    console.log('entre Actions');
    return async function(dispatch){
        const allPer = await getPer()
        console.log('actionALl', allPer);
        return dispatch({
            type:GET_PERITOS,
            payload:allPer

        })

    }
    // await return ({
    //    ,
       
    // })
}
export function getCasesAction(){
    return async function(dispatch){
        const allCases = await getCases()
        console.log('actionALlCases', allCases);
        return dispatch({
            type:GET_CASES,
            payload:allCases

        })

    }
}
export const searchCase=(payload)=>{
    return ({
        type:SEARCH_CASE,
        payload
     })
}
export const SearchPeritos=(payload)=>{
    return ({
        type:SEARCH_PERITO,
        payload
     })
}
export function peritosByName(){
    return ({
        type:GET_PERITOBYNAME,
        
     })

}
export const getritos=()=>{}
export const gPeritos=()=>{}
export const geritos=()=>{}
export const gritos=()=>{}
export const gitos=()=>{}