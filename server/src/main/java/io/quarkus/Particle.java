package io.quarkus;

public class Particle {

    private String id;
    private String name;
    private String title;
    private String body;

    public void setName(String name)
    {
        this.name = name;
        this.id = name;
        this.title = "This is a particle called " + name;
        this.body = "What do we know about " + name;
    }

    public String getName()
    {
        return this.name;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }
}
