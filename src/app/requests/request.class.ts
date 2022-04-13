import { Requestline } from '../requestlines/requestline.class';
import { User } from '../users/user.class';

export class Request {
  id: number = 0;

  description: string = '';

  justification: string = '';

  rejectionReason: string = '';

  deliveryMode: string = 'Pickup';

  status: string = 'NEW';

  total: number = 0;

  requestLines!: Requestline[];

  userId: number = 0;

  user!: User;
}