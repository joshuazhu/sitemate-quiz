import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, Input } from 'antd';

import ModalComponent from './components/ModalComponent'
import axios from 'axios';

function App() {
  const [tickets, setTicket] = useState<any[] | null>(null);
  useEffect(() => {
    // Fetch data from your RESTful API
    fetch('http://localhost:3030/api/tickets') // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTicket(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const action = async (data: any, type: string) => {
    switch (type) {
      case "post": await axios.post
    }


  }

  return (
    <div className="App">
      <header className="App-header">
        <ModalComponent title="Read Ticket">
          <Input placeholder="Ticket id"></Input>
        </ModalComponent>

        <ModalComponent title="Delete Ticket">
          <Input placeholder="Delete id"></Input>
        </ModalComponent>

        <ModalComponent title="Add Ticket">
          <Input placeholder="Create a new id"></Input>
        </ModalComponent>

        <ModalComponent title="Delete Ticket">
          <Input placeholder="Delete id"></Input>
        </ModalComponent>
        Tickets:
        {tickets ? (
          tickets.map((ticket, index) =>
            <div>
              <p>Id: {ticket.id}</p>
              <p>Description: {ticket.description}</p>
              <p>Title: {ticket.title}</p>
            </div>)
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div >
  );
}

export default App;
