import { v4 as uuid } from 'uuid'

import { Ticket } from "../model/Ticket";

export const MockTickets: Ticket[] = [{
  id: uuid(),
  title: "Ticket 1",
  description: "Ticket 1 description"
}, {
  id: uuid(),
  title: "Ticket 2",
  description: "Ticket 2 description"
}]
