import React from 'react';

import FilterIcon1 from '../../assets/images/filter-icon-active-1.svg';
import FilterIcon2 from '../../assets/images/filter-icon-active-2.svg';
import FilterIcon3 from '../../assets/images/filter-icon-active-3.svg';
import FilterIconInactive1 from '../../assets/images/filter-icon-inactive-1.svg'
import FilterIconInactive2 from '../../assets/images/filter-icon-inactive-2.svg'
import FilterIconInactive3 from '../../assets/images/filter-icon-inactive-3.svg'

import { usersAmistad, usersCitas, usersRelacion } from '@/utils/mockData';
import { DateUser } from '@/interfaces/interfaces';
import { StyledContainer, StyledIconContainer, StyledImage, StyledText } from './styles';

interface SwipeCardHeaderProps {
  setUsers: (users: DateUser[]) => void
  users: DateUser[]
}

export default function SwipeCardHeader({ setUsers, users }: SwipeCardHeaderProps) {
  return (
    <StyledContainer>
      <StyledIconContainer onPress={() => setUsers(usersAmistad)}>
        <StyledImage source={users == usersAmistad ? FilterIcon1 : FilterIconInactive1} />
        {
          users == usersAmistad && (
            <StyledText>Amistad</StyledText>
          )
        }
      </StyledIconContainer>
      <StyledIconContainer onPress={() => setUsers(usersCitas)}>
        <StyledImage source={users == usersCitas ? FilterIcon2 : FilterIconInactive2} />
        {
          users == usersCitas && (
            <StyledText>Citas</StyledText>
          )
        }
      </StyledIconContainer>
      <StyledIconContainer onPress={() => setUsers(usersRelacion)}>
        <StyledImage source={users == usersRelacion ? FilterIcon3 : FilterIconInactive3} />
        {
          users == usersRelacion && (
            <StyledText>Relación</StyledText>
          )
        }
      </StyledIconContainer>
    </StyledContainer>
  );
}
