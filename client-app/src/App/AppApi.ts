import { SetStateAction } from "react";
import { Fun, HttpResponse} from "./AppTypes";
import { MakeCallable } from "./AppUtils";

const repeatUntill = <I,O,S>(repeat:Fun<I,Promise<HttpResponse<O>>>, param : I, n: number, curryNewVal:Fun<O,SetStateAction<S>>, setState:React.Dispatch<React.SetStateAction<S>>) : void => {
    if(n<= 0){
      return 
    }
    console.log("Number of retries", n)
    repeat(param)
    .then( response => setState(curryNewVal(response.parsedBody as O)))
    .catch( error => {     
      console.error(error)
      return repeatUntill(repeat,param,--n, curryNewVal,setState)})
  }
  
export const asynco = <O,S>(setter: Fun<O,SetStateAction<S>>, request: RequestInfo, setState:React.Dispatch<React.SetStateAction<S>>)  => {
  const doApiCall =  MakeCallable<RequestInfo,Promise<HttpResponse<O>>>( async (requestUrl)  => {
    const response: HttpResponse<O> = await fetch(requestUrl);
    response.parsedBody = await response.json();
    return response;
  })

  const setApiValue = MakeCallable<O,SetStateAction<S>>(setter)
  const repeatApiCall = MakeCallable<RequestInfo,void>(requestUrl => repeatUntill<RequestInfo,O,S>(doApiCall, requestUrl,10, setApiValue, setState))
  return repeatApiCall(request)
  }

