import * as React from 'react';
import {   DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  Flex, FlexItem,
  PageSection, Title, TextContent, Text, TextVariants } from '@patternfly/react-core';
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
      <PageSection>
        <Title headingLevel="h1" size="lg">
          Particles
        </Title>
        <DataList aria-label="posts">
          {particles.map((particle) => (
            <DataListItem aria-labelledby={particle.id}>
              <DataListItemRow>
                  <DataListCell isFilled={false}>
                    <Flex direction={{ default: 'column'}}>
                      <FlexItem>
                        <Text component={TextVariants.p}>{particle.title}</Text>
                      </FlexItem>
                      <FlexItem>
                        <Text component={TextVariants.small}>{particle.body.slice(0, 75)}...</Text>
                      </FlexItem>
                    </Flex>
                  </DataListCell>
              </DataListItemRow>
            </DataListItem>
          ))}
        </DataList>
      </PageSection>
    );
    } else {
    return (
      <PageSection>
        <TextContent>
          <Text component="p">
            Page is loading...
          </Text>
        </TextContent>
      </PageSection>
    );
    }
}

export { Particles };
