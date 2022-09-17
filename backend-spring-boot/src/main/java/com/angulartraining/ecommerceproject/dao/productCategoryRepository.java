package com.angulartraining.ecommerceproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.angulartraining.ecommerceproject.entity.categoryProjection;
import com.angulartraining.ecommerceproject.entity.productCategory;
import com.angulartraining.ecommerceproject.entity.productProjection;

@CrossOrigin
@RepositoryRestResource(excerptProjection = categoryProjection.class)
public interface productCategoryRepository extends JpaRepository<productCategory, Long> {

}
