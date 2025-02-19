import React, { useState } from 'react';
import {
  Animated,
  Pressable,
  SafeAreaView,
} from 'react-native';

import InfoIcon from '../../assets/images/info-icon.svg';
import XSlideIcon from '../../assets/images/x-slide-icon.svg';
import CheckSlideIcon from '../../assets/images/check-slide-icon.svg';
import SuperLikeIcon from '../../assets/images/super-like-icon.svg';

import { DateUser } from '@/interfaces/interfaces';
import {
  Container,
  Card,
  CardImage,
  DetailContainer,
  CardContent,
  InfoUserContaner,
  InfoUserTexts,
  UserNameText,
  UserLocationText,
  InfoIconButton,
  SlideIconContainer,
  SlideIcon,
  MatchIconContainer,
  MatchIcon,
} from './styles';
import SwipeModal from '../SwipeModal/SwipeModal';
import { useAnimation } from '@/hooks/useAnimation';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import { useNavigation } from 'expo-router';

interface SwipeCardProps {
  user: DateUser;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
}

export default function SwipeCard({
  user,
  onSwipeLeft,
  onSwipeRight,
}: SwipeCardProps) {
  const [onSlideValue, setOnSlideValue] = useState(0);
  const [superLike, setSuperLike] = useState(false);
  const navigation = useNavigation();

  const handleSwipeMove = (dx: number) => {
    setOnSlideValue(dx);
  };

  const { translateX, rotate, panResponder, handleSwipeLeft, handleSwipeRight } = useAnimation(onSwipeLeft, onSwipeRight, handleSwipeMove);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleSuperLikePress = () => {
    navigation.navigate('match', { user: JSON.stringify(user) });
  };

  return (
    <SafeAreaView>
      <Animated.View
        style={{ transform: [{ translateX }, { rotate }] }}
        {...panResponder.panHandlers}>
        <Container>
          <Card>
            {onSlideValue < -100 && (
              <SlideIconContainer>
                <SlideIcon source={XSlideIcon} />
              </SlideIconContainer>
            )}

            {onSlideValue > 100 && (
              <SlideIconContainer>
                <SlideIcon source={CheckSlideIcon} />
              </SlideIconContainer>
            )}

            {superLike && (
              <MatchIconContainer onPress={handleSuperLikePress}>
                <MatchIcon source={SuperLikeIcon} />
              </MatchIconContainer>
            )}

            <CardImage source={{ uri: user.image }}>
              <DetailContainer>
                <CardContent>
                  <InfoUserContaner>
                    <InfoUserTexts>
                      <UserNameText>{user.name}, {user.age}</UserNameText>
                      <UserLocationText>{user.location}</UserLocationText>
                    </InfoUserTexts>
                    <Pressable onPress={() => setModalVisible(true)}>
                      <InfoIconButton source={InfoIcon} />
                    </Pressable>
                  </InfoUserContaner>
                </CardContent>
                <SwipeButtons handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight} setSuperLike={setSuperLike} />
              </DetailContainer>
            </CardImage>
          </Card>
        </Container>
      </Animated.View>
      <SwipeModal user={user} visible={isModalVisible} setModalVisible={setModalVisible} handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight} />
    </SafeAreaView>
  );
}