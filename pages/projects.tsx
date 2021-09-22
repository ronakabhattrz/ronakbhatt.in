import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

import { Title, Container, Text, Button, Grid, Link, List } from '@components';
import { getPosts, Post } from '@posts';

interface ProjectProps {
  projects: Post[];
}

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s ease-in-out 0s;

  :hover {
    transform: scale(1.02);
  }
`;

const ProjectContainer = styled(Container)`
  :hover > * img {
    transform: scale(1.03);
  }
`;

const ProjectTag = styled.li`
  color: rgb(105, 105, 105);
  letter-spacing: 0.03em;
  padding: 0 10px;
  font-size: 10px;
  line-height: 25px;
  border-radius: 25px;
  background-color: #f1f1f1;
`;

const ProjectButton = styled(Button)`
  padding: 12px 30px;
`;

const Projects = ({ projects }: ProjectProps): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Projects</title>
    </Head>
    <Container alignItems="center">
      <Title>Projects</Title>
      <Text textAlign="center">
        I&apos;m always working on new projects. <br />
        You can find them on my&nbsp;
        <a href="https://github.com/ronakabhattrz">Github</a>.
      </Text>
    </Container>
    <Grid
      py="4rem"
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
      width="100%"
      gridGap="100px"
    >
      {projects.map(({ data }) => (
        <ProjectContainer
          key={data.slug}
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          gridGap="1.5rem"
        >
          <Link href={data.url} width="100%">
            <ProjectImage src={data.preview} />
          </Link>
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link href={data.url}>
              <Title fontSize="1.4rem" as="h1">
                {data.title}
              </Title>
            </Link>
            <Link href={data.url}>
              <ProjectButton variant="secondary">View Project</ProjectButton>
            </Link>
          </Container>
          <Container gridGap="1rem">
            <Text
              textAlign="start"
              margin={0}
              lineHeight="180%"
              letterSpacing="0.02rem"
            >
              {data.caption}
            </Text>
            <List marginY="1rem">
              {data.tags.map((tag: string) => (
                <ProjectTag key={tag}>{tag}</ProjectTag>
              ))}
            </List>
          </Container>
        </ProjectContainer>
      ))}
    </Grid>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPosts('projects');

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
