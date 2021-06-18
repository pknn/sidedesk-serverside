import { GetsRequestQuery } from 'app/types/Express'
import {
  TicketQueryOption,
  TicketSortingOption,
} from 'app/types/TicketQueryOptions'
import { TicketStatus } from 'app/types/TicketStatus'

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
  each: param.each,
})

export const toSortingCondition = (sortingOption?: TicketSortingOption) =>
  sortingOption?.sortBy
    ? {
        [sortingOption.sortBy]: sortingOption.strategy,
      }
    : {}

export const toWhereCondition = (status?: TicketStatus) =>
  status ? { status } : undefined
