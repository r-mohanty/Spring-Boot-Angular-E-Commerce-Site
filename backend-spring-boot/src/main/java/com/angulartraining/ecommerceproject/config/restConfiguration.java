package com.angulartraining.ecommerceproject.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.angulartraining.ecommerceproject.entity.product;
import com.angulartraining.ecommerceproject.entity.productCategory;

@Configuration
public class restConfiguration implements RepositoryRestConfigurer {
	
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
							CorsRegistry cors) {
		HttpMethod[] unSupportedMethods = {HttpMethod.PUT,
											HttpMethod.DELETE,
											HttpMethod.POST};
		
		config.getExposureConfiguration().forDomainType(product.class)
			.withItemExposure((metaData, httpMethods) -> httpMethods.disable(unSupportedMethods))
			.withCollectionExposure((metaData, httpMethods) -> httpMethods.disable(unSupportedMethods));
		
		config.getExposureConfiguration().forDomainType(productCategory.class)
		.withItemExposure((metaData, httpMethods) -> httpMethods.disable(unSupportedMethods))
		.withCollectionExposure((metaData, httpMethods) -> httpMethods.disable(unSupportedMethods));
	}
}
