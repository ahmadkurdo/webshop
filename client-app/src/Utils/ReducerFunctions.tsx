import { Product, ReducerSearch, SearchBarState } from "../Types/Types"

export function exampleReducer(state : SearchBarState<Product[]>, action : ReducerSearch,) {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return { ...state, loading: false, value: ''}
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query }
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results }
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection }
  
      default:
        throw new Error()
    }
  }