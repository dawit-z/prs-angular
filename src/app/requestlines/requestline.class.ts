import { Product } from "../products/product.class";
import { Request } from "../requests/request.class";

export class Requestline {
  id: number = 0;
  requestId: number = 0
  request!: Request;
  productId: number = 0;
  product!: Product;
  quantity: number = 1;
}