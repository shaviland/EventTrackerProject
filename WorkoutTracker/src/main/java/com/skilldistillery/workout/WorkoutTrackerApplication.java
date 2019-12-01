package com.skilldistillery.workout;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class WorkoutTrackerApplication extends SpringBootServletInitializer {
  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(WorkoutTrackerApplication.class);
  }
  public static void main(String[] args) {
    SpringApplication.run(WorkoutTrackerApplication.class, args);
  }
  
}