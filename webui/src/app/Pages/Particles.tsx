import * as React from 'react';
import { PageSection, Title, TextContent, Text, TextVariants } from '@patternfly/react-core';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Particles() {
  const [particles, setParticles] = useState([]);
  const navigate = useHistory();

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch (apiBaseUrl + "/api/particles" )
     .then( (response) => response.json() )
     .then( (data) => { console.log(data); setParticles(data); })
  }, []);

  const openPost = (id) => {
    navigate.push(`/particles/${id}`);
  };

  if (particles.length) {
    return (
      <div>
        <h1>Particles</h1>
        <div className="posts">
          {particles.map((particle) => (
            <div
              className="particle"
              key={particle.id}
              onClick={() => openPost(particle.id)}
            >
              <div className="title">{particle.title}</div>
              <div className="body">{particle.body.slice(0, 75)}...</div>
              <div className="link">Read more</div>
            </div>
          ))}
        </div>
      </div>
    );
    } else {
    return (
      <div>
        <p>Page is loading...</p>
      </div>
    );
    }
}

export { Particles };
