import { AppState } from "../../../App/AppState"
import { Setter } from "../../../App/AppTypes"
import { Product } from "../Product/ProductTypes"
import { SearchBarState } from "./SearchBarState"
import { ReducerSearch } from "./SearchBarTypes"
import React from "react";
import Label from "semantic-ui-react/dist/commonjs/elements/Label/Label"
import { SearchResultProps } from "semantic-ui-react"

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

export const setSearchBarState: Setter<SearchBarState<Product[]>, AppState>  = 
  (newValue:SearchBarState<Product[]>) => (prevState:AppState) =>   ({...prevState, searchbarState: newValue})

export const searchResultRenderer : (p: SearchResultProps) => React.ReactElement = (item) => <Label content={item.name}/>
