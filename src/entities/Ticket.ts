import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Ticket as TicketModel } from 'app/models/Ticket'

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
  reporterName: string

  @Column({ nullable: true })
  reporterEmail?: string

  @Column()
  status: TicketStatus

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  constructor(
    title: string,
    description: string,
    reporterName: string,
    reporterEmail?: string,
  ) {
    super()
    this.title = title
    this.description = description
    this.reporterName = reporterName
    this.reporterEmail = reporterEmail
    this.status = 'pending'
  }
}

export const toModel = (_: Ticket): TicketModel => ({})
