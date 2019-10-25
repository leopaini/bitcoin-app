export interface IQuote {
  market_cap: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  price: number;
  volume_24h: number;
}

export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: { id: number; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
