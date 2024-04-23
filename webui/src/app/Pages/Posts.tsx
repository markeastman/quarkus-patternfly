import * as React from 'react';
import { PageSection, Title, TextContent, Text, TextVariants } from '@patternfly/react-core';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useHistory();

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch (apiBaseUrl + "/api/particles" )
     .then( (response) => response.json() )
     .then( (data) => { console.log(data); setPosts(data); })
  }, []);

  const openPost = (id) => {
    navigate.push(`/posts/${id}`);
  };

  if (posts.length) {
    return (
      <div>
        <h1>Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div
              className="post"
              key={post.id}
              onClick={() => openPost(post.id)}
            >
              <div className="title">{post.title}</div>
              <div className="body">{post.body.slice(0, 75)}...</div>
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

export { Posts };
