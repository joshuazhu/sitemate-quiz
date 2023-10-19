import express, { Request, Response } from 'express';
import cors from 'cors'
import { startApp } from './app'

const server = express();
const port = 3030;

const ticketService = startApp()

server.use(express.json());
server.use(cors())
// Define a simple API endpoint

server.get('/api/tickets', (req: Request, res: Response) => {
  const ticket = ticketService.getAllTickets()
  res.json(ticket);
});


server.get('/api/tickets:id', (req: Request, res: Response) => {
  const id = req.params.id || ""
  const ticket = ticketService.readTicket(id)

  if (!ticket) {
    res.status(404).json({ message: 'Ticket not found' })
  }

  res.json(ticket);
});

server.delete('/api/tickets:id', (req: Request, res: Response) => {
  const id = req.params.id || ""

  console.log(`Items to be delete: ${id}`)
  const toDeleteTicket = ticketService.deleteTicket(id)

  if (!toDeleteTicket) {
    res.status(404).json({ message: 'Ticket not exists' })
  }

  res.status(201).json({ message: "Item deleted successfully!" });
});

server.put('/api/tickets:id', (req: Request, res: Response) => {
  const updatedTicket = req.body;
  ticketService.updateTicket(updatedTicket)

  res.status(201).json({ message: "Item has been updated successfully!" })
})

server.post('/api/tickets', (req: Request, res: Response) => {
  const newTicket = req.body;
  const ticket = ticketService.addTicket(newTicket)

  res.status(201).json(ticket)
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
