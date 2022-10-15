import { FC } from "react";
import Ripple from 'react-native-material-ripple';
import { SectionWrap } from "./styled/Home.styled";
import { 
  FilterBtn, 
  FilterInactive, 
  FilterText, 
  MeetingsCaption, 
  MeetingsFilter,
  RippleBtn
} from "./styled/Meetings.styled";

export const Meetings: FC = () => {
  return (
    <SectionWrap>
      <MeetingsCaption>Meetings</MeetingsCaption>
      <MeetingsFilter>
        <Ripple rippleContainerBorderRadius={100}>
          <FCard bg="transparent" color="#fff" title="Group" />
        </Ripple>
        <RippleBtn>
          <FCard bg="#EAF8ED" color="#000" title="Individual" />
        </RippleBtn>
      </MeetingsFilter>
    </SectionWrap>
  )
}

interface IFCard {
  bg: string;
  color: string;
  title: string;
}

const FCard = ({ bg, color, title }: IFCard) => (
  <FilterBtn>
    <FilterInactive bg={bg}>
      <FilterText color={color}>{title}</FilterText>
    </FilterInactive>
  </FilterBtn>
)