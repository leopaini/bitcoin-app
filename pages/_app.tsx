import React from "react";
import NextApp, { AppContext } from "next/app";
import Meta from "../components/Meta";
import Header from "../components/Header";
import "../styles/styles.styl";

interface IProps {
  pageProps: any;
}
class App extends NextApp<IProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Meta />
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;
