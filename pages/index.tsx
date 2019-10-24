import React from "react";
import PriceBox from "../components/PriceBox";
import { NextPage } from "next";

interface IProps {}
const Home: NextPage<IProps> = () => (
  <div className="container">
    <div className="row m-4">
      <div className="col-md-12">
        <PriceBox />
      </div>
      <div className="col-md-8">noticias bitcoin</div>
      <div className="col-md-8">next events</div>
    </div>
  </div>
);

Home.getInitialProps = async () => {
  const result = await fetch("https://api.coinmarketcap.com/v2/ticker/1");
  const response = await result.json();
  console.log(response);
  return {};
};

export default Home;
