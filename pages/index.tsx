import React from "react";
import moment from "moment";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { IQuote, INews } from "../interfaces";
import PriceBox from "../components/PriceBox";
import Article from "../components/Article";

interface IProps {
  price: IQuote;
  news: INews[];
  events: any;
}
const Home: NextPage<IProps> = ({ price, news }) => {
  return (
    <div className="container">
      <div className="row m-4">
        <div className="col-md-12">
          <PriceBox price={price} />
        </div>
        <div className="col-md-8">
          <div className="row">
            {news.map((article: INews, index: number) => (
              <Article key={index} article={article} />
            ))}
          </div>
        </div>
        <div className="col-md-8">next events</div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (): Promise<IProps> => {
  const [resNews, resBit, resEvents] = await Promise.all([
    callNewsApi(),
    callBitCoinApi(),
    callEventsApi()
  ]);
  console.log("**** events *****", resEvents);

  return {
    price: resBit.data.quotes.USD,
    news: resNews.articles || [],
    events: resEvents
  };
};

const callNewsApi = async (): Promise<any> => {
  const apiKey: string = "ddc8f371652d4e919dd2fc07ae53eda9";
  const lastWeek: string = moment()
    .subtract(1, "weeks")
    .startOf("week")
    .format("YYYY-MM-DD");
  const url: string = `https://newsapi.org/v2/everything?q=bitcoin&from=${lastWeek}&sortBy=publishedAt&apiKey=${apiKey}&language=es`;
  const result = await fetch(url);
  return await result.json();
};

const callBitCoinApi = async (): Promise<any> => {
  const url = "https://api.coinmarketcap.com/v2/ticker/1/";
  const result = await fetch(url);
  return await result.json();
};

const callEventsApi = async () => {
  const apiKey: string = "YXZ6UDRH5WEJCFFAQI";
  const url: string = `https://www.eventbriteapi.com/v3/events/search?q=bitcoin&sort_by=date&location.address=argentina&token=${apiKey}`;

  try {
    const result = await fetch(url);
    return await result.json();
  } catch (e) {
    return null;
  }
};

export default Home;
