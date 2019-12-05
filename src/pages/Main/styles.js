import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const Cards = styled.View`
  align-items: center;
  padding-top: 20px;
`;

export const Card = styled.Image`
  width: 64px;
  height: 94px;
`;

export const CardButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const Text = styled.Text`
  font-size: 18px;
  height: 44px;
`;
