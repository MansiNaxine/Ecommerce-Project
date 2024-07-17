package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ProductException;
import com.example.demo.exception.UserException;
import com.example.demo.model.Review;
import com.example.demo.model.User;
import com.example.demo.request.ReviewRequest;
import com.example.demo.service.ReviewService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private ReviewService reviewService;
	
	@PostMapping("/create")
	public ResponseEntity<Review> createReviewHandler(@RequestBody ReviewRequest req,@RequestHeader("Authorization") String jwt) throws UserException, ProductException{
		
		User user=userService.findUserProfileByJwt(jwt);
		System.out.println("product id"+req.getProductId()+" - "+req.getReview());
		Review review=reviewService.createReview(req, user);
		System.out.println("Product review "+req.getReview());
		return new ResponseEntity<Review>(review,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Review>> getAllReviewsHandler(@PathVariable Long productId){
		
		List<Review> reviews=reviewService.getAllReviews(productId);
		
		return new ResponseEntity<List<Review>>(reviews,HttpStatus.OK);
	}

}
