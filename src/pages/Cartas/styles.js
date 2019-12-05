import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 30px;
  background: #eee;
`;

export const Cards = styled.View`
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Card = styled.Image`
  width: 90%;
  height: 90%;
  background: #eee;
`;

export const Text = styled.Text`
  font-size: 12px;
`;
