package com.example.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity

public class Ticket {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int ticketId;
	int ticketCount;//2
	double ticketPrice;//150.00
	
	@ManyToOne(cascade = CascadeType.ALL)  
	@JoinColumn(name="timeId")  
	TimeSlot timeSlot;
	public static final double bookingFee=50.00;
	public static final double GSTPercentage=18;
	double internetFee;//104.00
	double  totalFee;//404.00	
	
	public double calculate_internet_handling_fee(int ticketCount,double ticketPrice){
		internetFee=(((ticketCount)*(ticketPrice))*(GSTPercentage)/100)+bookingFee;
		return internetFee;
		}
	
	public double calculate_total_fee(){
		double internet_fee=calculate_internet_handling_fee(ticketCount,ticketPrice);
		totalFee=((ticketCount)*(ticketPrice)) +internet_fee;
		return totalFee;
		}	
	
	
	
	
	
}
