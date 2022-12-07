import React from 'react';
import { Title, Container, Text, Button, Grid, Link } from '@components';
import Head from 'next/head';
import styled from 'styled-components';

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s ease-in-out 0s;

  :hover {
    transform: scale(1.02);
  }
`;

const BlogContainer = styled(Container)`
  :hover > * img {
    transform: scale(1.03);
  }
`;

const BlogTag = styled.li`
  color: rgb(105, 105, 105);
  letter-spacing: 0.03em;
  padding: 0 10px;
  font-size: 10px;
  line-height: 25px;
  border-radius: 25px;
  background-color: #f1f1f1;
`;

const BlogButton = styled(Button)`
  padding: 12px 30px;
`;

function Blog() {
  const [articles, setarticles] = React.useState([]);
  React.useEffect(() => {
    fetch('https://dev.to/api/articles?username=ronakabhattrz')
      .then((res) => res.json())
      .then((res) => {
        setarticles(res);
      });
  }, []);

  return (
    <Container marginBottom="5rem">
      <Head>
        <title>Blogs</title>
      </Head>
      <Grid
        py="4rem"
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
        width="100%"
        gridGap="100px"
      >
        {articles.map((article: any) => {
          return (
            <BlogContainer
              key={article.id}
              flexDirection="column"
              alignItems="flex-start"
              width="100%"
              gridGap="1.5rem"
            >
              <Link href={article.url} width="100%">
                <BlogImage src={article.social_image} />
              </Link>
              <Container
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Link href={article.url}>
                  <Title fontSize="1.0rem" as="h1">
                    {article.title}
                  </Title>
                </Link>
                <Link href={article.url}>
                  <BlogButton variant="secondary">View</BlogButton>
                </Link>
              </Container>
              <Container gridGap="1rem">
                <Text
                  textAlign="start"
                  margin={0}
                  lineHeight="180%"
                  letterSpacing="0.02rem"
                >
                  {article.description}
                </Text>
              </Container>
            </BlogContainer>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Blog;
