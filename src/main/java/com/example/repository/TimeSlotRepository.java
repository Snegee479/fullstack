package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pojo.Screen;
import com.example.pojo.TimeSlot;
@Repository

public interface TimeSlotRepository extends JpaRepository <TimeSlot,Integer>{

}
