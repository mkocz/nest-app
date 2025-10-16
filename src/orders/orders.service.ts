import { Injectable } from '@nestjs/common';
import { db, Order } from 'src/db';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }
  public getById(id: string): Order | null {
    return db.orders.find((el) => el.id === id);
  }
}
