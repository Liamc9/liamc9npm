import React from "react";
import styled from "styled-components";
import { ChevronRightIcon } from "../Branding/icons/Icons";
// Atoms
const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

// Molecules
const PaymentMethodsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

// Organisms
const PaymentMethodsWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

// Main Component
const ManagePaymentMethods = ({ paymentMethods, onAddPaymentMethod }) => {
  return (
    <PaymentMethodsWrapper>
      <ListHeader>Manage Payment Methods</ListHeader>
      <PaymentMethodsList>
        {paymentMethods.map((method, index) => (
          <ListItem key={index}>
            <span>{method.name}</span>
            <ChevronRightIcon className='w-6 h-6' />
          </ListItem>
        ))}
      </PaymentMethodsList>
      <Button onClick={onAddPaymentMethod}>Add Payment Method</Button>
    </PaymentMethodsWrapper>
  );
};

export default ManagePaymentMethods;
