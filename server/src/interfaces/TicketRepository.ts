import { Ticket } from "../model/Ticket"

export interface TicketRepository {
  add(ticket: Ticket): Ticket
  delete(id: string): void
  update(ticket: Ticket): void
  read(id: string): Ticket | undefined
  getAll(): Ticket[]
}
