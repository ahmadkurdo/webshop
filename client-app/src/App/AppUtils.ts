import { Fun } from "./AppTypes"

export const MakeCallable = <input,output>(f:(_:input) => output) : Fun<input,output> => {
    let fun = f as Fun<input,output>
    fun.then = function<finalOutput>(this:Fun<input,output>, otherFunction:Fun<output,finalOutput>) : Fun<input,finalOutput> 
    {
      return MakeCallable(x => otherFunction(this(x)))
    
    }
    return fun
  }


