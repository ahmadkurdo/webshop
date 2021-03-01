import { ProductOverviewState } from "../Components/ProductOverview/ProductOverviewState";

export interface AppState{
    productOverviewState : ProductOverviewState
    
}

export const initialState = (): AppState => (
    {    productOverviewState : {
           products : {data:[] , kind:'loading'},
       
           searchbarState : {
           loading : false,
           results : [],
           value : '',
           items : []
         }
       }
       })