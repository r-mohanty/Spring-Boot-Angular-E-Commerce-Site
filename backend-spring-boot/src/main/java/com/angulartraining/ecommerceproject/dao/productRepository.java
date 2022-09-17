package com.angulartraining.ecommerceproject.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.angulartraining.ecommerceproject.entity.product;
import com.angulartraining.ecommerceproject.entity.productProjection;

@CrossOrigin
@RepositoryRestResource(excerptProjection = productProjection.class)
public interface productRepository extends JpaRepository<product, Long>{

	Page<product> findBycategoryId(@Param("id") Long id, Pageable pageable);
	
	Page<product> findByNameContaining(@Param("keyword") String keyword, Pageable pageable);

}
