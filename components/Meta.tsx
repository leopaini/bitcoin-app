import React from "react";
import Head from "next/head";

interface IProps {}
const Meta: React.SFC<IProps> = (): JSX.Element => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/bootstrap.min.css" />

    <title>BitCoin App</title>
  </Head>
);

export default Meta;
