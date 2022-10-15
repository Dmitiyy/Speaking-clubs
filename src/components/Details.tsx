import { FC, useEffect, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withPressAnimation } from "../utils/withPressAnimation";
import { DetailsContent, DetailsItem, DetailsText, DetailsWrap } from "./Home/styled/Details.styled";

const Icon = () => (<Feather name="more-horizontal" size={35} color="black" />);

export const Details: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);  
  const AnimatedIcon = withPressAnimation(Icon, () => setIsOpen(prev => !prev));

  return (
    <DetailsWrap>
      <AnimatedIcon />
      {
        isOpen && (
          <DetailsContent>
            <DetailsItem>
              <Feather name="calendar" size={20} color="black" />
              <DetailsText>02.12.2022</DetailsText>
            </DetailsItem>
            <DetailsItem>
              <MaterialIcons name="access-time" size={20} color="black" />
              <DetailsText>4:00 pm</DetailsText>
            </DetailsItem>
          </DetailsContent>
        )
      }
    </DetailsWrap>
  )
}