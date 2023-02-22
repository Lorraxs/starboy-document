import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Grid, Typography } from '@mui/material';
import { DocSearch } from '@docsearch/react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Grid 
      container
      sx={{
        bgcolor: '1f1f1f',
        width: '100vw',
        height: '50vh'
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {/* <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
      /> */}
      <Grid
        item
        xs={4}
      >
        <Typography variant='h5'>A FiveM Framework writen in TypeScript</Typography>
        <Typography variant='h5'>With powerful and lightweight inversion of control (Ioc)<br/> container powered by InversifyJS</Typography>
        <Typography variant='h5'>Creating a roleplay server has never been easier.</Typography>
      </Grid>
      <Grid 
        item 
        xs={5}
      >
        <img src='./img/logo.png' />
      </Grid>
    </Grid>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ProjectStarboy Document">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
