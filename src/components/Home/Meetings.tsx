import { FC } from "react";
import { withPressAnimation } from "../../utils/withPressAnimation";
import { SectionWrap } from "./styled/Home.styled";
import { 
  FilterBtn, 
  FilterInactive, 
  FilterText, 
  MeetingsCaption, 
  MeetingsFilter
} from "./styled/Meetings.styled";

export const Meetings: FC = () => {
  const FCardGroup = withPressAnimation(FCard);
  const FCardIndividual = withPressAnimation(FCard);

  return (
    <SectionWrap>
      <MeetingsCaption>Meetings</MeetingsCaption>
      <MeetingsFilter>
        <FCardGroup
          padding={3} left={0} bg="transparent" color="#fff" title="Group"
        />
        <FCardIndividual
          padding={3} left={5} bg="#EAF8ED" color="#000" title="Individual"
        />
      </MeetingsFilter>
    </SectionWrap>
  )
}

interface IFCard {
  padding: number;
  left: number;
  bg: string;
  color: string;
  title: string;
}

const FCard = ({ padding, left, bg, color, title }: IFCard) => (
  <FilterBtn padding={padding} left={left}>
    <FilterInactive bg={bg}>
      <FilterText color={color}>{title}</FilterText>
    </FilterInactive>
  </FilterBtn>
)