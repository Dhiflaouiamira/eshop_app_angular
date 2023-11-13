import { ProductType } from "./product.enum";
import { ProductCondition } from "./product.enum1";

export class Product {
  _id?: string = "";
  name: string = "";
  price: number = 0;
  promo?: number = 0;
  image: string = "";
  stars: number = 5;
  quantity?: number = 1;
  conditions: ProductCondition = ProductCondition.Newproducts;
  type: ProductType = ProductType.Maquillage;
  createdAt?: Date = new Date();
  [key: string]: any;
}
