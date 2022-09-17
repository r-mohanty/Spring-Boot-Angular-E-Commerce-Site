package com.angulartraining.ecommerceproject.entity;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="productSummary", types={product.class})
public interface productProjection {

	public String getImageUrl();

	public boolean isActive();

	public int getUnitsInStock();

	public Date getDateCreated();

	public Date getLastUpdated();

	public Long getId();

	public String getSku();

	public String getName();

	public String getDescription();

	public BigDecimal getUnitPrice();
}
