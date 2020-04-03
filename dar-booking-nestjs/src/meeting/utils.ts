import { LessThan, MoreThan } from 'typeorm'
import { format } from 'date-fns'
export const MoreThanDate = (date: Date) => MoreThan(format(date, 'yyyy-mm-dd hh:mm:ss'))
export const LessThanDate = (date: Date) => LessThan(format(date, 'yyyy-mm-dd hh:mm:ss'))