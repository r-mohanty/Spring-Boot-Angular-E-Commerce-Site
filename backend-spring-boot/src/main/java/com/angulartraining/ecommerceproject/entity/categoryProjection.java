package com.angulartraining.ecommerceproject.entity;

import org.springframework.data.rest.core.config.Projection;

@Projection(name="categorySummary", types={productCategory.class})
public interface categoryProjection {
	public Long getId();
	
	public String getCategoryName();
}
