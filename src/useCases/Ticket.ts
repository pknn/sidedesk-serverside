import {
  TicketCreationJsonBody,
  TicketUpdateJsonBody,
  toEntity,
} from 'app/bodies/Ticket'
import { Ticket as TicketEntity, toModel } from 'app/entities/Ticket'
import { toSortingCondition, toWhereCondition } from 'app/helpers/misc'
import { Ticket } from 'app/models/Ticket'
import { TicketQueryOption } from 'app/types/TicketQueryOptions'
import { ticketStatusOptions } from 'app/types/TicketStatus'

export const getTicket = async (id: number): Promise<Ticket> => {
  const ticket = await TicketEntity.findOneOrFail(id)
  return toModel(ticket)
}

const getEach = async (option: TicketQueryOption): Promise<Ticket[]> => {
  const promises = ticketStatusOptions.map((ticketStatus) =>
    TicketEntity.find({
      where: { status: ticketStatus },
      order: toSortingCondition(option.sorting),
      take: option.each,
      skip: option.offset,
    }),
  )
  const result = (await Promise.all(promises)).flat()

  return result.map(toModel)
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
    each: overrideOptions.each,
  }

  if (option.each) {
    return getEach(option)
  }

  const result = await TicketEntity.find({
    where: toWhereCondition(option.status),
    order: toSortingCondition(option.sorting),
    take: option.limit,
    skip: option.offset,
  })

  return result.map(toModel)
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
