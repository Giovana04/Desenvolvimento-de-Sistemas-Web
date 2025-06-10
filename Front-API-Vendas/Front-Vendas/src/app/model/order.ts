export default class Order {
    id? : string;
    customerId : string;
    productId : OrderProduct[];
}

export class OrderProduct {
    id : string; 
    quantity : number;
}