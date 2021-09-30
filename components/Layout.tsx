import React from 'react';
import Head from 'next/head';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

import styles from '@styles/Home.module.css';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

const tagManagerArgs = {
  gtmId: 'GTM-PTQB8D3',
  preview: 'env-2',
};

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}
ReactGA.initialize('AW-872249860');

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const personalStructuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: 'Ronak Bhatt',
  alternateName: 'RonakBhattRz',
  nationality: 'Indian',
  birthPlace: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
  },
  gender: 'Male',
  Description: 'Technologist',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'India',
  },
  url: 'https://ronakbhatt.in',
  image: 'https://www.ronakbhatt.in/img/me.jpg',
  sameAs: [
    'https://www.facebook.com/RonakbhattRz/',
    'https://twitter.com/ronakabhattrz',
    'https://www.instagram.com/ronakbhattrz/',
    'https://www.youtube.com/channel/UC_jKbr7ACXE7LsuDoLaCJcw',
    'https://www.linkedin.com/in/ronakabhattrz/',
    'https://music.ronakbhatt.in',
    'https://ronakbhatt.in',
  ],
  jobTitle:
    'Ronak, Ronak Bhatt, Ruby, Ruby on Rails, MySQL, Postgres, react js, Typescript, next js, Heroku, AWS, ronakbhattrz, ronakabhattrz, ronak songs, ronak bhatt ruby on rails, ruby on rails developer, react js developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer | Consultant',
  },
};

const Layout: React.FC<LayoutProps> = ({ title = 'Ronak Bhatt', children }) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <script
        key={'jobJSON-ronak'}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personalStructuredData),
        }}
      />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="author"
        content="Ronak Bhatt | Ruby on Rails | React JS | Typescript | Netx Js | AWS"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="Ronak Bhatt | Ruby on Rails | React JS | Typescript | Netx Js | AWS"
      />
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
      <meta httpEquiv="content-language" content="en" />
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
