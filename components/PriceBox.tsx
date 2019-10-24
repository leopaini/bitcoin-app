import React from "react";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";

interface IProps {}
const PriceBox: NextPage<IProps> = props => (
  <div className="card text-white bg-primary mb-3">
    <div className="card-header">Precio del BitCoin</div>
    <div className="card-body">
      <h4 className="card-title">Primary card title</h4>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
);

export default PriceBox;
