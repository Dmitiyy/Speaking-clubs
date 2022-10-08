import { FC } from "react";
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {  
  WrapHead, 
  HelloTitle, 
  Highlighted, 
  Next,
  NextBg,
  NextWrapBg,
  NextContent,
  NextTools,
  NextCaption,
  NextDescription,
  NextPLus,
} from './styled/Header.styled';
import { withPressAnimation } from "../../utils/withPressAnimation";
import { SectionWrap } from "./styled/Home.styled";
import { Details } from "../Details";

const NextBtn: FC = () => (
  <NextPLus>
    <Feather name="plus" size={35} color="black" />
  </NextPLus>
);

export const Header: FC = () => {
  const NextAnimatedBtn = withPressAnimation(NextBtn);

  return (
    <SectionWrap>
      <WrapHead>
        <HelloTitle>Hello, <Highlighted>John Smith</Highlighted></HelloTitle>
        <AntDesign name="user" size={27} color="black" />
      </WrapHead>
      <Next>
        <NextWrapBg><NextBg>Next</NextBg></NextWrapBg>
        <NextContent>
          <View>
            <NextCaption>The Enforcer</NextCaption>
            <NextDescription>
              Miami's top mob enforcer, Cuda, sacrifices it all to tear down the criminal 
            </NextDescription>
          </View>
          <NextTools>
            <Details />
            <NextAnimatedBtn />
          </NextTools>
        </NextContent>
      </Next>
    </SectionWrap>
  )
};