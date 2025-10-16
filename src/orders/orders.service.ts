import { Injectable } from '@nestjs/common';
import { db, Order } from 'src/db';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }
  public getById(id: string): Order | null {
    return db.orders.find((el) => el.id === id);
  }
  public delete(id: string): void {
    db.orders = db.orders.filter((el) => el.id !== id);
    return;
  }
  public create(orderData: Omit<Order, 'id'>): Order {
    const newOrder = { ...orderData, id: uuidv4() };
    db.orders.push(newOrder);
    return newOrder;
  }
  public update(orderData: Omit<Order, 'id'>, id: Order['id']): void {
    db.orders = db.orders.map((order) => {
      if (order.id === id) {
        return { ...order, ...orderData };
      }
      return order;
    });
  }
}
