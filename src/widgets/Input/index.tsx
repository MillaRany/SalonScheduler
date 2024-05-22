import React from 'react';
import * as S from './styles';
import { InputProps } from './type';

function Input({ placeholder, label }: InputProps) {
  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.ContainerInput>
        <S.Input placeholder={placeholder}></S.Input>
      </S.ContainerInput>
    </div>
  );
}

export default Input;
