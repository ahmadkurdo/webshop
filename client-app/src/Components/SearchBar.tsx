import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { Search, Grid, Header, Segment, Label, SearchResultData, SearchResultProps, SearchProps, Container } from 'semantic-ui-react'
import { Product, ReducerSearch, SearchBarState } from '../Types/Types'
import { exampleReducer } from '../Utils/ReducerFunctions'
import { searchResultRenderer } from '../Utils/Renderers'

export const  SearchBar : React.FC<SearchBarState<Product[]>> = (props : SearchBarState<Product[]>) => {
  const [state, dispatch] = useReducer(exampleReducer, props)
  const {loading, results, value} = state
  const handleSearchChange = useCallback((e,data) => {
    dispatch({ type: 'START_SEARCH', query: data.value })
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      } 
      dispatch({
        type: 'FINISH_SEARCH',
        results:  props.items.filter(product => product.name.includes(data.value)),
      })
  }, [state.items])

  return (
        <Search
          loading={loading}
          onResultSelect={(e, selected) =>
            console.log(selected)
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          resultRenderer={searchResultRenderer}
        />
  )
}