import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import { StyledComponent } from "styled-components";

export const MeetingsCaption = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;

export const MeetingsFilter = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

// export const FilterActiveBtn = styled.Button`
//   padding: 30px;
//   border-radius: 100px;
// `;

export const FilterBtn = styled(LinearGradient as any).attrs({
  start: {x: 0, y: 0}, 
  end: {x: 1, y: 1}, 
  colors: ['#96E6B3', '#2DC653'] 
})<{padding: number, left: number}>
`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({padding}) => padding}px;
  border-radius: 100px;
  margin-left: ${({left}) => left}px;
`;

export const FilterText = styled.Text<{color: string}>`
  color: ${({color}) => color};
  font-size: 18px;
  font-weight: bold;
`;

export const FilterInactive = styled.View`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #EAF8ED;
`;