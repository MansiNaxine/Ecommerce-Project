package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;
import com.example.demo.model.CartItem;
import com.example.demo.model.Product;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

	@Query("SELECT ci FROM CartItem ci where ci.cart= :cart AND ci.product= :product AND ci.size= :size AND ci.userId= :userId ")
	public CartItem isCartItemExists(@Param("cart") Cart cart,@Param("product") Product product,@Param("size") String size,
									@Param("userId")Long userId);

	
}
