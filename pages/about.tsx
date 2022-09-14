import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

import {
  SiRuby,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiReact,
  SiNextDotJs,
  SiGraphql,
  SiMysql,
  SiHtml5,
  SiMongodb,
  SiGithub,
  SiJira,
  SiJquery,
  SiMaterialUi,
  SiRedux,
  SiSass,
  SiBitbucket,
  SiElasticsearch,
} from 'react-icons/si';
import { getPosts, Post } from '@posts';

interface AboutProps {
  experiences: Post[];
}

const About = ({ experiences }: AboutProps): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiRuby,
        url: 'https://rubyonrails.org/',
      },
      {
        Icon: SiTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiGraphql,
        url: 'https://graphql.org/',
      },
      {
        Icon: SiAmazonaws,
        url: 'https://aws.amazon.com/',
      },
      {
        Icon: SiNextDotJs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiPostgresql,
        url: 'https://www.postgresql.org/',
      },
      {
        Icon: SiMysql,
        url: 'https://www.mysql.com/',
      },
      {
        Icon: SiMongodb,
        url: 'https://www.mongodb.com/',
      },
      {
        Icon: SiHtml5,
        url: 'https://en.wikipedia.org/wiki/HTML',
      },
      {
        Icon: SiBitbucket,
        url: 'https://bitbucket.org/',
      },
      {
        Icon: SiGithub,
        url: 'hhttps://github.com/',
      },
      {
        Icon: SiJira,
        url: 'https://www.atlassian.com/software/jira',
      },
      {
        Icon: SiJquery,
        url: 'https://jquery.com/',
      },
      {
        Icon: SiMaterialUi,
        url: 'https://material-ui.com/',
      },
      {
        Icon: SiRedux,
        url: 'https://redux.js.org/',
      },
      {
        Icon: SiSass,
        url: 'https://sass-lang.com/',
      },
      {
        Icon: SiElasticsearch,
        url: 'https://www.elastic.co/elasticsearch/',
      },
    ],
    [],
  );

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          Freelancer | Consultant
        </Title>
        <Container maxWidth={['100%', '700px']} marginY="2rem">
          <Text>I&apos;m a Full-Stack developer living in India.</Text>
          <Text>
            During my free time I like to produce music, play guitar. You can
            check some cool music on my{' '}
            <a href="https://open.spotify.com/artist/57OlkDwFEiWMKvrmlQPVOT">
              Spotify
            </a>
            .
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          Technologies I frequently use
        </Title>
        <Grid
          gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          Work Experiences
        </Title>
        <Container width="100%">
          {experiences.map(({ data }, i) => (
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="1rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="70%">
                <>{console.log('TITLE:' + data.image_url)}</>
                <Image
                  src={data.image_url}
                  alt={data.title}
                  width={50}
                  height={90}
                  objectFit="cover"
                />
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text
                      fontSize="smaller"
                      margin={0}
                      color="rgba(0, 0, 0, 0.1)"
                    >
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
