import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Exclude, Expose } from 'class-transformer'

@Entity({ name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Exclude()
  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  constructor(partial: Partial<User>) {
    Object.assign(this, partial)
  }
}
