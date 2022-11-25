"use strict";
// // Interface for each Object
// interface IOrder {
//   id: number;
//   addProduct(productId: string): void;
//   addShoppingAddress(address: string): void;
// }
// interface IPayment {
//   addCreditCardNumber(ccNumber: number): void;
//   completePayment(order: IOrder): boolean;
// }
// // Define all varaiants for each objects
// // Order varaints => Online and Physical
// class OnlineOrder implements IOrder {
//   id: number;
//   constructor(id: number) {
//     this.id = id;
//   }
//   addProduct(productId: string): void {
//     console.log(`Online Product id is ${productId} added to order list`);
//   }
//   addShoppingAddress(address: string): void {
//     console.log(`The order with id ${this.id} has address of: ${address}`);
//   }
// }
// class PhysicalOrder implements IOrder {
//   id: number;
//   constructor(id: number) {
//     this.id = id;
//   }
//   addProduct(productId: string): void {
//     console.log(`Physical Product id is ${productId} added to order list`);
//   }
//   addShoppingAddress(address: string): void {
//     console.log(`The order with id ${this.id} has address of: ${address}`);
//   }
// }
// class OnlinePayment implements IPayment {
//   addCreditCardNumber(ccNumber: number): void {
//     console.log(`ccNumber of card is ${ccNumber}`);
//   }
//   completePayment(order: OnlineOrder): boolean {
//     console.log(`Order has completed ${order.id}`);
//     return true;
//   }
// }
// class PhysicalPayment implements IPayment {
//   addCreditCardNumber(ccNumber: number): void {
//     console.log(`Pysical ccNumber of card is ${ccNumber}`);
//   }
//   completePayment(order: OnlineOrder): boolean {
//     console.log(`Physical Order has completed ${order.id}`);
//     return true;
//   }
// }
// // Define abstract factory
// interface ICommerceFactory {
//   createOrder(id: number): IOrder;
//   createPayment(): IPayment;
// }
// // Define a class for implementing ICommerceFactory
// class CommerceOnlineFactory implements ICommerceFactory {
//   createOrder(id: number): IOrder {
//     return new OnlineOrder(id);
//   }
//   createPayment(): IPayment {
//     return new OnlinePayment();
//   }
// }
// class CommercePhysicalFactory implements ICommerceFactory {
//   createOrder(id: number): IOrder {
//     return new PhysicalOrder(id);
//   }
//   createPayment(): IPayment {
//     return new PhysicalPayment();
//   }
// }
// // Implements of final
// const onlineCommerceFactory = new CommerceOnlineFactory();
// const onlineOrder = onlineCommerceFactory.createOrder(1);
// const onlinePayment = onlineCommerceFactory.createPayment();
// onlineOrder.addProduct("123");
// onlineOrder.addShoppingAddress("Tehran-Iran");
//# sourceMappingURL=app.js.map