import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
`;

const Label = styled.label`
  :after {
    content: "${props => props.required ? " *" : ""}";
    color: red;
  }
`;

const Select = styled.select`
  
`;

const Option = styled.option`
  
`;

const PhoneInputContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: row;
`;

const CurrencyContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

const PHONE_PREFIXES = ["+61", "+1", "+44"];

const CURRENCIES = {
  "Australian Dollar (AUD)": "AUD",
  "United States Dollar (USD)": "USD",
  "Great British Pound (GBP)": "GBP"
};

const QuoteForm = (props) => {
  const {
    amount,
    setAmount,
    setFromCurrency,
    fromCurrency,
    setToCurrency,
    toCurrency,
  } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonePrefix, setPhonePrefix] = useState(PHONE_PREFIXES[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Form>
      <HorizontalContainer>
        <InputContainer>
          <Label required>First Name</Label>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </InputContainer>
        <InputContainer>
          <Label required>Last Name</Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </InputContainer>
      </HorizontalContainer>
      <InputContainer>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </InputContainer>
      <InputContainer>
        <Label>Telephone / Mobile</Label>
        <PhoneInputContainer>
          <Select value={phonePrefix} onChange={(e) => setPhonePrefix(e.target.value)}>
            {PHONE_PREFIXES.map((prefix) => (
              <Option value={prefix}>{prefix}</Option>
            ))}
          </Select>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </PhoneInputContainer>
      </InputContainer>
      <InputContainer>
        <HorizontalContainer>
          <CurrencyContainer>
            <Label required>From Currency</Label>
            <Select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              {Object.keys(CURRENCIES).map((currency) => (
                <Option value={CURRENCIES[currency]}>{currency}</Option>
              ))}
            </Select>
          </CurrencyContainer>
          <CurrencyContainer>
            <Label required>To Currency</Label>
            <Select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              {Object.keys(CURRENCIES).map((currency) => (
                <Option value={CURRENCIES[currency]}>{currency}</Option>
              ))}
            </Select>
          </CurrencyContainer>
        </HorizontalContainer>
      </InputContainer>
      <InputContainer>
        <Label required>Amount</Label>
        <Input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputContainer>
    </Form>
  );

};

export default QuoteForm;