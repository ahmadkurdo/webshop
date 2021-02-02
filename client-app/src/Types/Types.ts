
export interface Option {
    id : number,
    type : string,
    name : string,
    productId : number
}

export interface Product {
    id : number,
    description : string,
    name : string,
    price : number,
    wheight : number,
    image : string,
    quantity : number,
    options? : Option[]
    
}

export interface AppState{
    productOverviewState : ProductOverviewState
    
}

export interface Async<T>{
    data: T,
    kind : 'loading'| 'loaded'
}

export interface ProductOverviewState{
    products : Async<Product[]>
    searchbarState : SearchBarState<Product[]>
}

export interface SearchBarState<T>{
    loading : boolean,
    results : T,
    value : string,
    items : T
}

export interface HttpResponse<T> extends Response {
    parsedBody?: T;
  }

export type ReducerSearch = 
    {type: 'CLEAN_QUERY'} | 
    {type: 'START_SEARCH' , query: string}  | 
    {type: 'UPDATE_SELECTION' , selection: string} | 
    {type: 'FINISH_SEARCH' , results: any}

export type Setter<U,T> = (newVal: U) => (prevState: T) =>  T 

