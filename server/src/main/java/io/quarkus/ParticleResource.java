package io.quarkus;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Set;

@Path("/api/particles")
public class ParticleResource {

    @GET
    public Set<Particle> getParticles() {

        System.out.println( "@@@@@@@@ Getting Particles" );
        Set <Particle> particleList = Collections.newSetFromMap(Collections.synchronizedMap(new LinkedHashMap<>()));

        Particle particle = new Particle();
        particle.setName("Graviton");
        particleList.add(particle);

        Particle particle2 = new Particle();
        particle2.setName("Pentaquark");
        particleList.add(particle2);

        Particle particle3 = new Particle();
        particle3.setName("Electron");
        particleList.add(particle3);
        return particleList;
    }
}