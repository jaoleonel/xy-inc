package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.filters.PoiFilter;
import com.spring.models.Poi;
import com.spring.service.PoiService;

@RestController
@RequestMapping("/poi")
public class PoiController {

	@Autowired
	private PoiService poiService;

	@RequestMapping("/allPois")
	public List<Poi> getAllPois() {
		return poiService.findAll();
	}
	
	@RequestMapping("/save")
	public Poi save(@RequestBody Poi poi) {
		return poiService.save(poi);
	}
	
	@RequestMapping("/findProximos")
	public List<Poi> findProximos(@RequestBody PoiFilter poifilter) {
		return poiService.findProximos(new Double(poifilter.getDmax()), poifilter.getX(), poifilter.getY());
	}

}
