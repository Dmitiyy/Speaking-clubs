import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const MeetingsCaption = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;

export const MeetingsFilter = styled.View`
  margin-top: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const FilterBtn = styled(LinearGradient as any).attrs({
  start: {x: 0, y: 0}, 
  end: {x: 1, y: 1}, 
  colors: ['#96E6B3', '#2DC653'] 
})<{padding: number, left: number}>`
  min-width: 130px;
  justify-content: center;
  align-items: center;
  padding: ${({padding}) => padding}px;
  border-radius: 100px;
  background: #52b788;
  margin-left: ${({left}) => left}px;
`;

export const FilterText = styled.Text<{color: string}>`
  color: ${({color}) => color};
  font-size: 16px;
  font-weight: bold;
`;

export const FilterInactive = styled.View<{bg: string}>`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({bg}) => bg};
`;

export const MeetingsCard = styled.View`
  /* width: 150px; */
  padding: 10px;
  background: #fff;
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const CardTitleWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -7px;
`;

export const CardTitle = styled.Text`
  font-size: 19px;
  width: 90px;
`;

export const CardDescription = styled.Text`
  font-size: 14px;
`;

export const CardEnroll = styled.View`
  height: 37px;
  background: #96E6B3;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const CardBtnText = styled.Text`
  color: #10451D;
  font-size: 16px;
  font-weight: 700;
`;