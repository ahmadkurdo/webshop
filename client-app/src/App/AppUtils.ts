import { Fun } from "./AppTypes"

export const makeFun = <input,output>(f:(_:input) => output) : Fun<input,output> => {
    let fun = f as Fun<input,output>
    fun.then = function<finalOutput>(this:Fun<input,output>, otherFunction:Fun<output,finalOutput>) : Fun<input,finalOutput> 
    {
      return makeFun(x => otherFunction(this(x)))
    
    }
    return fun
  }


