import React from "react";
import styled from "styled-components";
import { VocabLevelType } from "@ykvocab/shared";

interface InputProps {
  name: string;
  width?: string;
  placeholder?: string | VocabLevelType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    name,
    width = "60px", 
    placeholder = "",
    value,
    onChange
  }: InputProps
) => {
  return (
    <StyledInput
      type="text"
      name={name}
      width={width}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
    </StyledInput>
  )
};

const StyledInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #4caf50;
  }
`;
