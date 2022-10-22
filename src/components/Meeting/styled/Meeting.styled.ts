import styled from "styled-components/native";

export const MeetingWrap = styled.View`
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MeetingCaption = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #000;
`;

export const MeetingDescription = styled.Text`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin-top: 10px;
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
  font-weight: 700;
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
  margin-bottom: ${({ top }) => !top ? 5 : 0}px;
  margin-top: ${({ top }) => !top ? 5 : 0}px;
`;