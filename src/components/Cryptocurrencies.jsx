import React, { useState, useEffect } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified, search }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  const coins = cryptosList?.data?.coins;

  useEffect(() => {
    if (!isFetching) {
      const filteredData = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    }
  }, [cryptosList, searchTerm]);

  if (isFetching) {
    return <Loader />;
  }

  search = count > 10 ? true : false;

  return (
    <>
      {search ? (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
      {/* NOTE gutters = spaces between items and [32, 32] means [left-right, top-bottom] */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          // NOTE xs = xtra small devices
          // 24 = Full width
          // 12 = Half width and vice versa.
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
                // style={{ margin: 10 }}
              >
                <p>Price: {millify(currency.price)} $ </p>
                <p>Market Cap: {millify(currency.marketCap)} </p>
                <p>Daily Change: {millify(currency.change)}% </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
