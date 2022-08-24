package com.example.dao;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.pojo.Ticket;
import com.example.repository.TicketRepository;

@Component
public class TicketDAO {
	@Autowired
	TicketRepository repo;
	public Ticket findById(int id) {
		return (Ticket) repo.findById(id).orElse(null);
	}
	public Ticket insert( Ticket t) {
		return (Ticket) repo.save(t);
	}
	public List<Ticket> getAllTickets() {
		return repo.findAll();
	}
	public String deleteById(int id) {
		repo.deleteById(id);
		return "deleted the id value:"+id; 
	}
	public Ticket updateTicket(Ticket t) {
		Ticket ticket= repo.findById(t.getTicketId()).orElse(null);
		ticket.setTimeSlot(t.getTimeSlot());
		ticket.setTotalFee(t.getTotalFee());
		ticket.setInternetFee(t.getInternetFee());
		ticket.setTicketCount(t.getTicketCount());
		ticket.setTicketPrice(t.getTicketPrice());
		return (Ticket) repo.save(ticket);
	}
}
