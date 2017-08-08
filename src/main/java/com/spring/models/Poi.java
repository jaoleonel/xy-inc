package com.spring.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Poi {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long poiId;
	
	private String nome;
	private Integer x, y;
	
	public Poi(){
	}
	
	public Poi(String nome, Integer x, Integer y){
		this.nome = nome;
		this.x = x;
		this.y = y;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getX() {
		return x;
	}
	public void setX(Integer x) {
		this.x = x;
	}
	public Integer getY() {
		return y;
	}
	public void setY(Integer y) {
		this.y = y;
	}

}
