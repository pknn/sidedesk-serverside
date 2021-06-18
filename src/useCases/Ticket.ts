import {
  TicketCreationJsonBody,
  TicketUpdateJsonBody,
  toEntity,
} from 'app/bodies/Ticket'
import { Ticket as TicketEntity, toModel } from 'app/entities/Ticket'
import { Ticket } from 'app/models/Ticket'
import { TicketQueryOption } from 'app/types/TicketQueryOptions'

export const getTicket = async (id: number): Promise<Ticket> => {
  const ticket = await TicketEntity.findOneOrFail(id)
  return toModel(ticket)
}

export const getTickets = async (
  overrideOptions: Partial<TicketQueryOption>,
): Promise<Ticket[]> => {
  const option: TicketQueryOption = {
    offset: overrideOptions.offset || 0,
    limit: overrideOptions.limit || 50,
    sorting: overrideOptions.sorting || {
      sortBy: 'id',
      strategy: 'ASC',
    },
    status: overrideOptions.status,
  }

  const baseQuery = TicketEntity.createQueryBuilder()
    .offset(option.offset!)
    .limit(option.limit)
    .orderBy(option.sorting!.sortBy!, option.sorting!.strategy)

  const finalQuery = option.status
    ? await baseQuery.where({ status: option.status }).getMany()
    : await baseQuery.getMany()

  return finalQuery.map(toModel)
}

export const create = async (
  ticketCreateJsonBody: TicketCreationJsonBody,
): Promise<Ticket> => toModel(await toEntity(ticketCreateJsonBody).save())

export const update = async (
  id: number,
  ticketUpdateBody: TicketUpdateJsonBody,
): Promise<Ticket> => {
  await TicketEntity.update(id, ticketUpdateBody)
  return getTicket(id)
}
