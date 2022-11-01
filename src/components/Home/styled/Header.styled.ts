import styled from "styled-components/native";

export const WrapHead = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const HelloTitle = styled.Text`
  font-size: 20px;
  font-family: Montserrat-Bold;
`;

export const Highlighted = styled.Text`
  color: #2DC653;
  font-weight: 500;
`;

export const Next = styled.View`
  background-color: #fff;
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const NextBg = styled.Text`
  font-weight: 900;
  font-size: 120px;
  color: rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
`;

export const NextWrapBg = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const NextContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -7px;
`;

export const NextTools = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 15px;
`;

export const NextCaption = styled.Text`
  font-size: 28px;
  font-family: Montserrat-Bold;
`;

export const NextDescription = styled.Text`
  font-size: 18px;
  width: 230px;
  margin-top: 7px;
  line-height: 25px;
  font-family: Montserrat-Medium;
`;

export const NextPLus = styled.View`
  width: 50px;
  height: 50px;
  background: #92E6A7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
`;