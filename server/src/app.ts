import { MemoryTicketRepository } from "./repository/MemoryTicketRepository";
import { TicketService } from "./services/TicketService";

export const startApp = (): TicketService => {
  const ticketRepository = new MemoryTicketRepository()
  const ticketService = new TicketService(ticketRepository)

  return ticketService
}
