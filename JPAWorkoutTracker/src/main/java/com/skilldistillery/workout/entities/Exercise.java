package com.skilldistillery.workout.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Exercise {
	
	//FIELDS
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String type;
	private Integer duration;
	private Integer weight;
	@Column(name = "num_reps")
	private Integer numReps;
	@Column(name = "num_sets")
	private Integer numSets;
	private String place;
	
	//CONSTRUCTORS
	

	public Exercise() {
		super();
	}

	public Exercise(int id, String name, String type, Integer duration, Integer weight, Integer numReps,
			Integer numSets, String place) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.duration = duration;
		this.weight = weight;
		this.numReps = numReps;
		this.numSets = numSets;
		this.place = place;
	}

	//GETTERS AND SETTERS

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getDuration() {
		return duration;
	}

	public void setDuration(Integer duration) {
		this.duration = duration;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public Integer getNumReps() {
		return numReps;
	}

	public void setNumReps(Integer numReps) {
		this.numReps = numReps;
	}

	public Integer getNumSets() {
		return numSets;
	}

	public void setNumSets(Integer numSets) {
		this.numSets = numSets;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	//HASHCODE AND EQUALS

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((duration == null) ? 0 : duration.hashCode());
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((numReps == null) ? 0 : numReps.hashCode());
		result = prime * result + ((numSets == null) ? 0 : numSets.hashCode());
		result = prime * result + ((place == null) ? 0 : place.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		result = prime * result + ((weight == null) ? 0 : weight.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Exercise other = (Exercise) obj;
		if (duration == null) {
			if (other.duration != null)
				return false;
		} else if (!duration.equals(other.duration))
			return false;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (numReps == null) {
			if (other.numReps != null)
				return false;
		} else if (!numReps.equals(other.numReps))
			return false;
		if (numSets == null) {
			if (other.numSets != null)
				return false;
		} else if (!numSets.equals(other.numSets))
			return false;
		if (place == null) {
			if (other.place != null)
				return false;
		} else if (!place.equals(other.place))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		if (weight == null) {
			if (other.weight != null)
				return false;
		} else if (!weight.equals(other.weight))
			return false;
		return true;
	}
	
	
	//TOSTRING
	
	@Override
	public String toString() {
		return "exercise [id=" + id + ", name=" + name + ", type=" + type + ", duration=" + duration + ", weight="
				+ weight + ", numReps=" + numReps + ", numSets=" + numSets + ", place=" + place + "]";
	}
	
	
	
	
}
