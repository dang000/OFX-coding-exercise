import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button/PillButton.js';
import QuoteForm from '../components/Form/QuoteForm.js';
import Header from '../components/Header/Header.js'
import Quote from '../components/Quote/Quote.js'

const HomeDiv = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const HomePage = () => {
  const [getQuote, setGetQuote] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("GET QUOTE");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState("25,000.00");
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("AUD");

  // Missing error checking
  //Fetch data and render quote
  const onSubmit = () => {
    if (getQuote) {
      setGetQuote(false);
      setButtonTitle("GET QUOTE");
    } else {
      fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            setGetQuote(true);
            setButtonTitle("START NEW QUOTE");
            setError();
          },
          (error) => setError(error),
        );
    }
  };

  return (
    <HomeDiv>
      <Header title="Quick Quote" />
      {!getQuote ? (
        <QuoteForm
          setAmount={setAmount}
          amount={amount}
          setFromCurrency={setFromCurrency}
          fromCurrency={fromCurrency}
          setToCurrency={setToCurrency}
          toCurrency={toCurrency}
        />
      ) : (
          <Quote
            items={items}
            error={error}
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        )}
      <Button title={buttonTitle} onClick={onSubmit} />
    </HomeDiv>
  )
};

export default HomePage;