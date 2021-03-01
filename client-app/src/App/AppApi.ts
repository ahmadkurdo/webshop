import { Entity } from "ts-lenses";
import { Product } from "../Components/ProductOverview/Product/ProductTypes";
import { AppState } from "./AppState";
import { Action, ApiState, Fun, HttpResponse, Setter } from "./AppTypes";
import { MakeCallable } from "./AppUtils";

//To Do: Make Funtion retry for x amount of time
export async function HttpGet<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request);
    response.parsedBody = await response.json();
    return response;
  }


const repeatUntill = <I,O>(repeat:Fun<I,Promise<HttpResponse<O>>>, untill: Fun<O ,Boolean>, param : I, n: number) : ApiState<O>=> {
    const apistate : ApiState<O> =  {
      data: undefined,
      status: 'Loading'
    }

    console.log('Retries:', n)

    console.log('Api state:', apistate)

    repeat(param)
    .then( response => {
      console.log('Executed then ')
      apistate.data = response.parsedBody
    })
    .catch( response => apistate.status = 'Failed')
    if(n<= 0){
        apistate.status = 'Failed'
        return apistate
      }
    if(apistate.data !== undefined && untill(apistate.data)){
      apistate.status = 'Loaded'
      console.log("IM HERE")
      return apistate
      
      
    }

    repeatUntill(repeat,untill,param,--n)


  }
  

  
export const asynco = <T,S>(setter: Fun<ApiState<T>,Action<S>>, request: RequestInfo)  => {
  const doApiCall =  MakeCallable<RequestInfo,Promise<HttpResponse<T>>>( async (requestUrl)  => {
    const response: HttpResponse<T> = await fetch(requestUrl);
    response.parsedBody = await response.json();
    return response;
  })
  const setApiValue = MakeCallable<ApiState<T>,Action<S>>(setter)
  const promiseIsSucessful =  MakeCallable<T,boolean >( x => x !== undefined )
  const repeatApiCall = MakeCallable<RequestInfo,ApiState<T>>(requestUrl => repeatUntill<RequestInfo,T>(doApiCall,promiseIsSucessful,requestUrl,10))
  return repeatApiCall.then(setApiValue)(request)
  }

