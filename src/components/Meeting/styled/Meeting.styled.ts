import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';

export const MeetingWrap = styled.View`
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MeetingCaption = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: Montserrat-Bold;
`;

export const MeetingDescription = styled.Text`
  font-size: 16px;
  line-height: 26px;
  margin-top: 10px;
  font-family: Montserrat-Medium;
`;

//* Date cards

export const DateCard = styled.View<{ left: number }>`
  width: 115px;
  height: 80px;
  border-radius: 20px;
  background: #96E6B3;
  position: relative;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  padding: 10px;
  margin-left: ${({ left }) => !left ? 0 : left}px;
`;

export const DateCardIcon = styled.View`
  width: 53px;
  height: 53px;
  border-radius: 100px;
  background: rgba(105, 181, 132, 0.63);
  position: absolute;
  right: -10px;
  top: -10px;
  padding-right: 7px;
  padding-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
`;

export const DateCardText = styled.Text`
  color: white;
  font-size: 18px;  
  font-family: Montserrat-Bold;
`;

export const DateWrap = styled.View`
  margin-top: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Questions = styled.View`
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const QuestionsTitle = styled.Text`
  font-size: 18px;
  color: #000;
  font-family: Montserrat-Medium;
`;

export const QuestionsOpen = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #CAFADC;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionsHeader = styled.View<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-left-radius: ${({ isOpen }) => isOpen ? 0 : 10}px;
  border-bottom-right-radius: ${({ isOpen }) => isOpen ? 0 : 10}px;
`;

export const QuestionsContent = styled.View<{ isOpen: boolean }>`
  height: ${({ isOpen }) => isOpen ? 'auto' : '0px'};
  overflow: hidden;
  padding-bottom: ${({ isOpen }) => isOpen ? '10px' : '0px'};
`;

export const QuestionsText = styled.Text<{ top: boolean }>`
  font-size: 16px;
  color: #000;
  font-family: Montserrat-Medium;
  margin-bottom: ${({ top }) => !top ? 5 : 0}px;
  margin-top: ${({ top }) => !top ? 5 : 0}px;
`;

export const EnrollWrap = styled.View`
  width: 100%;
  background: transparent;
`;

export const EnrollBtn = styled(LinearGradient as any).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: ['#96E6B3', '#2DC653']
})`
  min-width: 130px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background: #52b788;
`;

export const EnrollText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-family: Montserrat-Bold;
`;

export const RippleEnroll = styled(Ripple as any).attrs({
  rippleContainerBorderRadius: 100
})`
  margin-left: 15px;
  margin-bottom: 10px;
  margin-right: 15px;
`;