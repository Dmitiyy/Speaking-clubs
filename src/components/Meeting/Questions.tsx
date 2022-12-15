import { FC, Fragment, useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';
import {
  QuestionsHeader,
  QuestionsTitle,
  QuestionsOpen,
  Questions as QuestionsStyled,
  QuestionsText,
  QuestionsContent
} from "./styled/Meeting.styled";

export const Questions: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Ripple onPress={() => { setIsOpen(prev => !prev) }} rippleContainerBorderRadius={10}>
        <QuestionsHeader isOpen={isOpen}>
          <QuestionsTitle>Questions</QuestionsTitle>
          <QuestionsOpen>
            <AntDesign name={isOpen ? "arrowup" : "arrowdown"} size={20} color="black" />
          </QuestionsOpen>
        </QuestionsHeader>
      </Ripple>
      <QuestionsStyled>
        <QuestionsContent isOpen={isOpen}>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
          <QuestionsText>Lorem Ipsum is simply dummy?</QuestionsText>
        </QuestionsContent>
      </QuestionsStyled>
    </Fragment>
  )
}