import React from "react";
import { IQuote } from "../interfaces";

interface IProps {
  price: IQuote;
}
const PriceBox: React.SFC<IProps> = ({ price }) => (
  <div className="card text-white bg-dark mb-3">
    <div className="card-header">Precio del BitCoin</div>
    <div className="card-body">
      <h4 className="card-title">Precio Actual: ${price.price.toFixed(2)}</h4>
      <p className="card-text d-md-flex justify-content-between">
        <span className="font-weight-bold">
          Última Hora: {price.percent_change_1h}%
        </span>
        <span className="font-weight-bold">
          Últimas 24 hs: {price.percent_change_24h}%
        </span>
        <span className="font-weight-bold">
          Últimos 7 días: {price.percent_change_7d}%
        </span>
      </p>
    </div>
  </div>
);

export default PriceBox;
