import { FC, Fragment, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';

import {
  DateCard,
  DateCardIcon,
  DateCardText,
  DateWrap,
  EnrollBtn,
  EnrollText,
  EnrollWrap,
  MeetingCaption,
  MeetingDescription,
  MeetingWrap,
  Questions,
  QuestionsContent,
  QuestionsHeader,
  QuestionsOpen,
  QuestionsText,
  QuestionsTitle,
  RippleEnroll
} from "../components/Meeting/styled/Meeting.styled";
import { ScrollView } from "react-native";

export const MeetingScreen: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <ScrollView>
        <MeetingWrap>
          <MeetingCaption>The caption</MeetingCaption>
          <MeetingDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error reprehenderit voluptates animi ipsa, eos doloremque amet nesciunt eum similique, explicabo iure beatae sunt rem quam at sit natus impedit.
            Laborum optio odit doloribus id soluta inventore vel eligendi impedit temporibus repellat praesentium beatae velit quaerat similique eius dolorum, dolore culpa, eos delectus sapiente facere neque voluptas! Similique, deleniti ipsam.
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
      </ScrollView>
      <EnrollWrap>
        <RippleEnroll>
          <EnrollBtn>
            <EnrollText>Enroll</EnrollText>
          </EnrollBtn>
        </RippleEnroll>
      </EnrollWrap>
    </Fragment>
  )
}