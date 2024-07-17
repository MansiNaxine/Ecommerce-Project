package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ProductException;
import com.example.demo.model.Cart;
import com.example.demo.model.CartItem;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repository.CartRepository;
import com.example.demo.request.AddItemRequest;

@Service
public class CartServiceImplementation implements CartService {

	
	private CartRepository cartRepo;
	
	private CartItemService cartItemService;
	
	private ProductService productService;
	
	
	
	public CartServiceImplementation(CartRepository cartRepo, CartItemService cartItemService,
			ProductService productService) {
		this.cartRepo = cartRepo;
		this.cartItemService = cartItemService;
		this.productService = productService;
	}

	@Override
	public Cart createCart(User user) {
		
		Cart cart=new Cart();
		cart.setUser(user);
		
		return cartRepo.save(cart);
	}

	@Override
	public CartItem addCartItem(Long userId, AddItemRequest req) throws ProductException {
		
		Cart cart=cartRepo.findByUserId(userId);
		Product product=productService.findProductById(req.getProductId());
		
		CartItem isPresent=cartItemService.isCartItemExist(cart, product, req.getSize(), userId);
		
		if(isPresent==null){
			CartItem cartItem=new CartItem();
			cartItem.setProduct(product);
			cartItem.setCart(cart);
			cartItem.setQuantity(req.getQuantity());
			cartItem.setUserId(userId);
			
			int price=req.getQuantity()*product.getDiscountedPrice();
			cartItem.setPrice(price);
			cartItem.setSize(req.getSize());
			
			CartItem createdCartItem=cartItemService.createCartItem(cartItem);
			cart.getCartItems().add(createdCartItem);
			
			
		}
		return isPresent;
	}

	@Override
	public Cart findUserCart(Long userId) {
		Cart cart=cartRepo.findByUserId(userId);
		
		int totalPrice=0;
		int totalDiscountedPrice=0;
		int totalItem=0;
		
		for(CartItem cartItem:cart.getCartItems()) {
			totalPrice = totalPrice+ cartItem.getPrice();
			totalDiscountedPrice =totalDiscountedPrice+ cartItem.getDiscountedPrice();
			totalItem =totalItem+cartItem.getQuantity();
		}
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setTotalPrice(totalPrice);
		cart.setTotalItem(totalItem);
		cart.setDiscount(totalPrice-totalDiscountedPrice);
		
		return cartRepo.save(cart);
	}



}
