package com.spring.service;

import java.util.List;

import com.spring.models.Poi;


public interface PoiService {
	Poi save(Poi poi);

    List<Poi> findAll();
    
    List<Poi> findProximos(Double dmax, int xpar, int ypar);

}

