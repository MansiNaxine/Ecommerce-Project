package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.OrderItem;
import com.example.demo.repository.OrderItemRepository;

@Service
public class OrderItemServiceImplementation implements OrderItemService {
	
	@Autowired
	private OrderItemRepository orderItemRepo;

	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		return orderItemRepo.save(orderItem);
	}

}
