import { MockTickets } from "../mockData/Tickets";
import { Ticket } from "../model/Ticket";
import { TicketRepository } from '../interfaces/TicketRepository';

export class MemoryTicketRepository implements TicketRepository {
  tickets: Ticket[]

  constructor() {
    this.tickets = MockTickets
  }

  add(ticket: Ticket): Ticket {
    this.tickets.push(ticket)

    return ticket
  }

  delete(id: string): void {
    this.tickets = this.tickets.filter(t => t.id !== id)
  }

  update(ticket: Ticket): void {
    const toBeUpdatedTicket = this.tickets.find(t => t.id === ticket.id)

    if (toBeUpdatedTicket) {
      toBeUpdatedTicket.description = ticket.description
      toBeUpdatedTicket.title
    }
  }

  read(id: string): Ticket | undefined {
    const ticket = this.tickets.find(t => t.id === id)
    return ticket
  }

  getAll(): Ticket[] {
    return this.tickets
  }
}
