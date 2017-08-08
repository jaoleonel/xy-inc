package com.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//When deploying on TomCat
//extends SpringBootServletInitializer 
public class ZupXyzIncApplication  {

//	When deploying on TomCat
//	@Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//        return application.sources(ZupXyzIncApplication.class);
//    }

	public static void main(String[] args) {
		SpringApplication.run(ZupXyzIncApplication.class, args);
	}
}