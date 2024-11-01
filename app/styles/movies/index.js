import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
background-color:black;
`;

export const Card = styled.TouchableOpacity`
display:flex;
flex-direction:row;
align-items:center;
margin-top:3%;
`

export const ImgContainer = styled.View`
width:80px;
margin-left:5%;
`;

export const ImageMovie = styled.Image`
  width:100%;
  height:auto;
  max-width:500px;
  flex: 1;
  aspect-ratio: 2/3;
`;

export const TitleMovie = styled.Text`
flex-shrink:1;
max-width:60%;
color:white;
padding-left:4%;
font-size: 20px;
`

