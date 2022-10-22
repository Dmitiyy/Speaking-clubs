import { FC, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';

import {
  DateCard,
  DateCardIcon,
  DateCardText,
  DateWrap,
  MeetingCaption,
  MeetingDescription,
  MeetingWrap,
  Questions,
  QuestionsContent,
  QuestionsHeader,
  QuestionsOpen,
  QuestionsText,
  QuestionsTitle
} from "../components/Meeting/styled/Meeting.styled";

export const MeetingScreen: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MeetingWrap>
      <MeetingCaption>The caption</MeetingCaption>
      <MeetingDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </MeetingDescription>
      <DateWrap>
        <DateCard>
          <DateCardIcon>
            <MaterialIcons name="access-time" size={25} color="white" />
          </DateCardIcon>
          <DateCardText>10:00 am</DateCardText>
        </DateCard>
        <DateCard left={10}>
          <DateCardIcon>
            <Feather name="calendar" size={22} color="white" />
          </DateCardIcon>
          <DateCardText>12.12.22</DateCardText>
        </DateCard>
      </DateWrap>
      <Ripple onPress={() => { setIsOpen(prev => !prev) }} rippleContainerBorderRadius={10}>
        <QuestionsHeader isOpen={isOpen}>
          <QuestionsTitle>Questions</QuestionsTitle>
          <QuestionsOpen>
            <AntDesign name={isOpen ? "arrowup" : "arrowdown"} size={20} color="black" />
          </QuestionsOpen>
        </QuestionsHeader>
      </Ripple>
      <Questions>
        <QuestionsContent isOpen={isOpen}>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
        </QuestionsContent>
      </Questions>
    </MeetingWrap>
  )
}