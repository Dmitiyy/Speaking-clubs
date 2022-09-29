import { FC, Fragment } from "react";
import { 
  FilterBtn, 
  FilterInactive, 
  FilterText, 
  MeetingsCaption, 
  MeetingsFilter 
} from "./styled/Meetings.styled";

export const Meetings: FC = () => {
  return (
    <Fragment>
      <MeetingsCaption>Meetings</MeetingsCaption>
      <MeetingsFilter>
        <FilterBtn padding={15} left={0}>
          <FilterText color="#fff">Group</FilterText>
        </FilterBtn>
        <FilterBtn padding={5} left={5}>
          <FilterInactive>
            <FilterText color="#000">Individual</FilterText>
          </FilterInactive>
        </FilterBtn>
      </MeetingsFilter>
    </Fragment>
  )
}