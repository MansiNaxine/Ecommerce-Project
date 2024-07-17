package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ProductException;
import com.example.demo.model.Product;
import com.example.demo.model.Rating;
import com.example.demo.model.User;
import com.example.demo.repository.RatingRepository;
import com.example.demo.request.RatingRequest;

@Service
public class RatingServiceImplementation implements RatingService {
	
	@Autowired
	private RatingRepository ratingRepo;
	@Autowired
	private ProductService productService;
	

//	public RatingServiceImplementation(Rating ratingRepo, ProductService productService) {
//		super();
//		this.ratingRepo = ratingRepo;
//		this.productService = productService;
//	}

	@Override
	public Rating createRating(RatingRequest req, User user) throws ProductException {
		
		Product product=productService.findProductById(req.getProductId());
		Rating rating =new Rating();
		rating.setProduct(product);
		rating.setUser(user);
		rating.setRating(req.getRating());
		rating.setCreatedAt(LocalDateTime.now());
		
		return ratingRepo.save(rating);
	}

	@Override
	public List<Rating> getProductsRating(Long productId) {
		
		return null;
	}

}
