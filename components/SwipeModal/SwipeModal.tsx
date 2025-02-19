import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';

import CloseIcon from '../../assets/images/close-icon.svg';
import PointsIcon from '../../assets/images/points-icon.svg';
import ModalUpIcon from '../../assets/images/modal-up-icon.svg'
import ModalDownIcon from '../../assets/images/modal-down-icon.svg'
import { ButtonsContainer, IconButton, InterestItem, InterestsContainer, InterestsList, InterestsTitle, InterestText, ModalContainer, ModalContent, ModalHeader, ModalIconButton, UserImage, UserInfoContainer, UserInfoText, UserLocationText } from './styles';
import { DateUser } from '@/interfaces/interfaces';
import SwipeButtons from '../SwipeButtons/SwipeButtons';

interface SwipeModalProps {
  user: DateUser
  visible: boolean
  setModalVisible: (visible: boolean) => void
  handleSwipeLeft: () => void
  handleSwipeRight: () => void
}

const { height } = Dimensions.get('window');

export default function SwipeModal({ user, visible, setModalVisible, handleSwipeLeft, handleSwipeRight }: SwipeModalProps) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleModalSize = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <ModalContainer>
        <ModalHeader>
          <Pressable onPress={() => setModalVisible(false)}>
            <ModalIconButton source={CloseIcon} />
          </Pressable>
          <Pressable>
            <ModalIconButton source={PointsIcon} />
          </Pressable>
        </ModalHeader>
        <ModalContent>
          <UserImage source={{ uri: user.image }} style={{ height: isExpanded ? height * 0.8 : height * 0.4 }} />
          <Pressable onPress={toggleModalSize} style={{
            position: 'absolute',
            marginBottom: 100,
            overflow: 'hidden',
            top: isExpanded ? height * 0.8 - 25 : height * 0.4 - 25,
            right: 20,
            alignSelf: 'center',
            zIndex: 99
          }}>
            <IconButton source={isExpanded ? ModalUpIcon : ModalDownIcon} />
          </Pressable>
          <UserInfoContainer style={{ height: isExpanded ? height * 0.2 : height * 0.6 }}>

            <UserInfoText>{user.name}, {user.age}</UserInfoText>
            <UserLocationText>{user.location}</UserLocationText>
            <InterestsContainer>
              <InterestsTitle>Intereses</InterestsTitle>
              <InterestsList>
                {user.intereses!.map((interes: DateUser, index: number) => (
                  <InterestItem key={index}>
                    <InterestText>{interes}</InterestText>
                  </InterestItem>
                ))}
              </InterestsList>
            </InterestsContainer>
            <ButtonsContainer >
              <SwipeButtons handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight} />
            </ButtonsContainer>
          </UserInfoContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}