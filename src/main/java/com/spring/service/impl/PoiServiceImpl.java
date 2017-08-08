package com.spring.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.PoiDao;
import com.spring.models.Poi;
import com.spring.service.PoiService;

@Service
public class PoiServiceImpl implements PoiService {

    @Autowired
    private PoiDao poiDao;

	public Poi save(Poi poi){
		return poiDao.save(poi);
	}

    public List<Poi> findAll(){
    	return poiDao.findAll();
    }
    
    public List<Poi> findProximos(Double dmax, int xpar, int ypar){
    	return poiDao.findProximos(dmax, xpar, ypar);
    }

}


