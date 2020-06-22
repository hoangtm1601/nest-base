import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm'
import { User } from '../user.entity'
import * as bcrypt from 'bcrypt'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this)
  }

  listenTo(): Function | string {
    return User;
  }

  beforeInsert(event: InsertEvent<User>): Promise<any> | void {
    const { password } = event.entity
    // @ts-ignore
    event.entity.password = bcrypt.hashSync(password, 10)
  }
}
