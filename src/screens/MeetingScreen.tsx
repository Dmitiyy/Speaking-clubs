import { FC, Fragment } from "react";
import { ScrollView } from "react-native";

import {
  EnrollBtn,
  EnrollText,
  EnrollWrap,
  MeetingWrap,
  RippleEnroll
} from "../components/Meeting/styled/Meeting.styled";

import { Header } from "../components/Meeting/Header";
import { Questions } from "../components/Meeting/Questions";

export const MeetingScreen: FC = () => {
  return (
    <Fragment>
      <ScrollView>
        <MeetingWrap>
          <Header />
          <Questions />
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