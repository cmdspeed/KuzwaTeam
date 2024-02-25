import { Link } from "react-router-dom";
import styled from "styled-components";

export const OrderTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.15;
  text-align: center;
  color: var(--main-text-color);
  margin: 2.5rem 1.875rem 0.75rem;
`;

export const OrderInput = styled.input`
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  height: 2.5rem;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 35px;
  box-sizing: border-box;
  &:hover,
  &:focus {
    border: 1px solid var(--logo-color);
    outline: none;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`;

export const LabelContainer = styled.div`
  &:hover,
  &:focus,
  &:focus-within {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`;

export const OrderIcon = styled.svg`
  display: flex;
  position: relative;
  bottom: 40px;
  left: 12px;
  padding-top: 3px;

  ${LabelContainer}:hover &,
  ${LabelContainer}:focus &,
  ${LabelContainer}:focus-within & {
    fill: var(--logo-color);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`;

export const LabelStyled = styled.label`
  font-size: 0.75rem;
  line-height: 1.16;
  color: var(--contacts-color);
  position: relative;
`;

export const Comment = styled.textarea`
  resize: none;
  height: 7.5rem;
  width: 100%;
  padding: 0.75rem 0.625rem;
  box-sizing: border-box;
`;

export const PolicyLabel = styled.label`
  color: var(--contacts-color);
  font-size: 14px;
  line-height: 1.71;
  margin: 20px 15px 0 0;
`;

export const PolicyLink = styled(Link)`
  color: var(--logo-color);
`;

export const CheckBox = styled.input`
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    opacity: 0.6;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
  }
`;
export const BtnWrapper = styled.div`
  width: 12.5rem;
  height: 3.125rem;
  margin: 1rem auto;
`;
