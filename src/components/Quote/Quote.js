import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h2`
  
`;

const RateContainer = styled.div`
  width: 200px;
  display: flex;
  text-align: left;
`;

const CurrencyText = styled.span`
  color: lightblue;
`;

const CustomerRateText = styled.h1`
  color: lightgreen;
`;

const Quote = (props) => {
  const { items, error, amount, fromCurrency, toCurrency } = props;

  //Calculate toCurrency amount
  const getToAmount = () => {
    const toResult = textToNumber(amount) * items.CustomerRate;
    return numberToCurrency(toResult);
  };

  //Convert number to currency
  const numberToCurrency = (inpAmount) => {
    return inpAmount.toFixed(2).toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  //Convert currency to number
  const textToNumber = (inpAmount) => {
    return parseFloat(inpAmount.replace(/,/g, ''));
  };

  if (error) {
    return (<div>Error: {error}</div>);
  } else {
    return (
      <QuoteContainer>
        <Text>
          OFX Customer Rate
        </Text>
        <CustomerRateText>
          {items.CustomerRate}
        </CustomerRateText>
        <RateContainer>
          <Text>
            From <br />
            {fromCurrency} <CurrencyText>{numberToCurrency(textToNumber(amount))}</CurrencyText> <br />
            To <br />
            {toCurrency} <CurrencyText>{getToAmount()}</CurrencyText>
          </Text>
        </RateContainer>
      </QuoteContainer>
    );
  }
};

export default Quote;