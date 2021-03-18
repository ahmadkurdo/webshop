import { SetStateAction } from "react";
import { Fun } from "../../../App/AppTypes";

export interface SearchBarState<T,S>{
    loading : boolean,
    results : T,
    value : string,
    items : T
    updateItems?: (e:S) => void

}