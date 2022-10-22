import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { 
  CardBtnText,
  CardDescription,
  CardEnroll,
  CardTitle,
  CardTitleWrap,
  MeetingsCard, 
} from "./styled/Meetings.styled";
import { Details } from '../Details';
import { RootStackParamList } from '../../screens/HomeScreen';

export const MeetingsCardComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <MeetingsCard>
      <CardTitleWrap>
        <CardTitle numberOfLines={1}>{'Minions The Rise of Gru'}</CardTitle>
        <Details />
      </CardTitleWrap>
      <CardDescription numberOfLines={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto ipsa dolor dicta vitae aliquid sequi, provident voluptate soluta distinctio eaque! Eveniet,
      </CardDescription>
      <Ripple rippleContainerBorderRadius={8} onPress={() => {navigation.navigate('Meeting')}}>
        <CardEnroll>
          <CardBtnText>Enroll</CardBtnText>
        </CardEnroll>
      </Ripple>
    </MeetingsCard>
  )
}