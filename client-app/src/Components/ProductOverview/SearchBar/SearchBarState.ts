export interface SearchBarState<T>{
    loading : boolean,
    results : T,
    value : string,
    items : T
}