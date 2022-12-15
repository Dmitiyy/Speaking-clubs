import { FC, Fragment } from "react";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  MeetingCaption,
  MeetingDescription,
  DateWrap,
  DateCard,
  DateCardIcon,
  DateCardText
} from "./styled/Meeting.styled";

export const Header: FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}