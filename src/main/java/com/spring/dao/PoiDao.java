package com.spring.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.models.Poi;


@Repository
public interface PoiDao extends CrudRepository<Poi, Long> {
	
	List<Poi> findAll();
	
	Poi save(Poi poi);
	
	@Query("SELECT p FROM Poi p WHERE :dmax >= SQRT(((p.x - :xpar)*(p.x - :xpar)) + ((p.y - :ypar)*(p.y - :ypar)))")
	public List<Poi> findProximos(@Param("dmax") Double dmax, @Param("xpar") int xpar, @Param("ypar") int ypar);
}


