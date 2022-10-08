import styled from "styled-components/native";

export const DetailsWrap = styled.View`
  position: relative;
`;

export const DetailsContent = styled.View`
  position: absolute;
  width: 120px;
  padding: 10px;
  padding-top: 0;
  background-color: #fff;
  border-radius: 8px;
  right: 0;
  top: 30px;
  z-index: 9999;
`;

export const DetailsItem = styled.View`
  display: flex; 
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const DetailsText = styled.Text`
  margin-left: 10px;
`;