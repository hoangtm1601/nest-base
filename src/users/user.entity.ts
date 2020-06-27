import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Exclude, Expose } from 'class-transformer'

@Entity({ name: 'users' })
export class User extends BaseEntity {
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
  
  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  createdAt: string
  
  @UpdateDateColumn({
      default: `now()`,
      nullable: true,
  })
  updatedAt: string
  
  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }
}
