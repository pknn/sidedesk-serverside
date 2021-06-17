import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export type TicketStatus = 'pending' | 'accepted' | 'resolved' | 'rejected'

@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  contactInformation: string

  @Column()
  status: TicketStatus

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  constructor(
    title: string,
    description: string,
    contactInformation: string,
    status: TicketStatus,
  ) {
    super()
    this.title = title
    this.description = description
    this.contactInformation = contactInformation
    this.status = status
  }
}
