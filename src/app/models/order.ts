import { Product } from 'src/app/models/product';
import { User } from './user';

export class Order {
  _id: string = "";
  client: User = new User();
  createdAt: Date = new Date();
  products: Product[] = [];
  status: string = "on-going";
  total: number = 0;
}
