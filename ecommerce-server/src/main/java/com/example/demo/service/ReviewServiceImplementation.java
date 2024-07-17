package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ProductException;
import com.example.demo.model.Product;
import com.example.demo.model.Review;
import com.example.demo.model.User;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.request.ReviewRequest;

@Service
public class ReviewServiceImplementation implements ReviewService {
	
	@Autowired
	private ReviewRepository reviewRepo;
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductRepository productRepo;

//	public ReviewServiceImplementation(ReviewRepository reviewRepo, ProductService productService,
//			ProductRepository productRepo) {
//		super();
//		this.reviewRepo = reviewRepo;
//		this.productService = productService;
//		this.productRepo = productRepo;
//	}

	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		
		Product product=productService.findProductById(req.getProductId());
		Review review=new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		return reviewRepo.save(review);
	}

	@Override
	public List<Review> getAllReviews(Long productId) {

		return reviewRepo.getAllProductsReviews(productId);
	}
	
	

}
