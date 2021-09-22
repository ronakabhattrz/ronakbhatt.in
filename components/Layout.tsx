import React from 'react';
import Head from 'next/head';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

import styles from '@styles/Home.module.css';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PTQB8D3',
  preview: 'env-2',
};

TagManager.initialize(tagManagerArgs);

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ title = 'Ronak Bhatt', children }) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="author" content="Ronak Bhatt" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ronak Bhatt" />
      <meta
        property="og:description"
        content="I'm a Full Stack software engineer with solid experience with Ruby on Rails and Javascript Frameworks. I've worked in applications in several business areas and with several technologies."
      />
      <meta
        name="description"
        content="I'm a Full Stack software engineer with solid experience with Ruby on Rails and Javascript Frameworks. I've worked in applications in several business areas and with several technologies."
      />
      <meta
        name="keywords"
        content="Ronak, Ronak Bhatt, Ruby, Ruby on Rails, MySQL, Postgres, react js, Typescript, next js, Heroku, AWS, ronakbhattrz, ronakabhattrz, ronak songs, ronak bhatt ruby on rails, ruby on rails developer, react js developer"
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta http-equiv="content-language" content="en" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Ronak Bhatt" />
      <meta property="og:type" content="website" />
      <meta property="twitter:site" content="@ronakabhattrz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content="https://ronakbhatt.in/img/preview.png"
      />
    </Head>
    <Nav />
    <Container justifyContent="space-between" alignContent="space-between">
      <main className={styles.main}>{children}</main>
      <Footer />
    </Container>
  </div>
);

export default Layout;
