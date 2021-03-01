export interface Option {
    id : number,
    type : string,
    name : string,
    productId : number
}

export interface Product {
    id : number,
    description : string,
    name : string,
    price : number,
    wheight : number,
    image : string,
    quantity : number,
    options? : Option[]
    
}