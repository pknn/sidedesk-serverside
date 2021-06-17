import { GetsRequestQuery } from 'app/types/Express'
import { TicketQueryOption } from 'app/types/TicketQueryOptions'

export const toTicketQueryOption = (
  param: GetsRequestQuery,
): TicketQueryOption => ({
  offset: param.offset,
  limit: param.limit,
  sorting: {
    sortBy: param.sort_by,
    strategy: param.strategy,
  },
  status: param.status,
})
