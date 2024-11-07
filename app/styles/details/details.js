import styled from "styled-components/native";

export const Layout = styled.View`
  align-items: center;
  min-height:100%;
  row-gap: 15px;
  column-gap: 6px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
`;

export const ImageDetails = styled.Image`
  width: 100%;
  height: 100%;
  resize: contain;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 36px;
`;

export const UnderTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const SinopseText = styled.Text`
  font-size: 14px;
  width:85%;
  justify-content:center;

`

export const TextDetails = styled.Text`
  font-size: 14px;
`;

export const BtnVoltar = styled.TouchableOpacity`
  background-color: red;
  border-radius: 5px;
  align-content: center;
  width:150px;
  height:60px;
  justify-content:center;
  align-items:center;
`;

export const BtnVoltarText = styled.Text`
  color: white;
  font-weight:bold;
`;
