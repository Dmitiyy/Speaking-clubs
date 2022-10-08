import Feather from 'react-native-vector-icons/Feather';
import { 
  CardBtnText,
  CardDescription,
  CardEnroll,
  CardTitle,
  CardTitleWrap,
  MeetingsCard, 
} from "./styled/Meetings.styled";
import { withPressAnimation } from "../../utils/withPressAnimation";
import { Details } from '../Details';

export const MeetingsCardComponent = () => {
  const CardBtnAnimated = withPressAnimation(CardBtn);

  return (
    <MeetingsCard>
      <CardTitleWrap>
        <CardTitle numberOfLines={1}>Minions The Rise of Gru</CardTitle>
        <Details />
      </CardTitleWrap>
      <CardDescription numberOfLines={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto ipsa dolor dicta vitae aliquid sequi, provident voluptate soluta distinctio eaque! Eveniet,
      </CardDescription>
      <CardBtnAnimated></CardBtnAnimated>
    </MeetingsCard>
  )
}

const CardBtn = () => (
  <CardEnroll>
    <CardBtnText>Enroll</CardBtnText>
  </CardEnroll>
)
