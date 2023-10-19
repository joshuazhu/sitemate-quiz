import { v4 as uuid } from 'uuid'

import { TicketRepository } from "../interfaces/TicketRepository";
import { Ticket } from "../model/Ticket";

export class TicketService {
  ticketRepository: TicketRepository

  constructor(ticketRepository: TicketRepository) {
    this.ticketRepository = ticketRepository
  }

  addTicket(ticket: Ticket): Ticket {
    ticket.id = uuid()
    return this.ticketRepository.add(ticket)
  }

  deleteTicket(id: string) {
    const toBeDeletedTicket = this.readTicket(id)

    if (!toBeDeletedTicket) return null
    this.ticketRepository.delete(id)
    return toBeDeletedTicket
  }

  updateTicket(ticket: Ticket) {
    const toBeUpdatedTicket = this.readTicket(ticket.id)

    if (!toBeUpdatedTicket) return null
    this.ticketRepository.update(ticket)
  }

  readTicket(id: string): Ticket | undefined {
    return this.ticketRepository.read(id)
  }

  getAllTickets(): Ticket[] {
    return this.ticketRepository.getAll()
  }
}


