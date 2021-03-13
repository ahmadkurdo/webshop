export type ReducerSearch = 
    {type: 'CLEAN_QUERY'} | 
    {type: 'START_SEARCH' , query: string}  | 
    {type: 'UPDATE_SELECTION' , selection: string} | 
    {type: 'FINISH_SEARCH' , results: any}