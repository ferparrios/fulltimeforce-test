import { useRef } from 'react'
import { Animated, PanResponder } from 'react-native';

export const useAnimation = (onSwipeLeft: () => void, onSwipeRight: () => void, onSwipeMove?: (dx: number) => void) => {

  const translateX = useRef(new Animated.Value(0)).current;

  const rotate = translateX.interpolate({
    inputRange: [-500, 0, 500],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_evt, gestureState) => {
        translateX.setValue(gestureState.dx);
        if (onSwipeMove) {
          onSwipeMove(gestureState.dx);
        }
      },
      onPanResponderRelease: (_evt, gestureState) => {
        if (gestureState.dx > 100) {
          Animated.timing(translateX, {
            toValue: 500,
            duration: 600,
            useNativeDriver: true,
          }).start(() => {
            onSwipeRight();
            translateX.setValue(0);
          });
        } else if (gestureState.dx < -100) {
          Animated.timing(translateX, {
            toValue: -500,
            duration: 600,
            useNativeDriver: true,
          }).start(() => {
            onSwipeLeft();
            translateX.setValue(0);
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            tension: 4,
            friction: 7,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const handleSwipeLeft = () => {
    Animated.timing(translateX, {
      toValue: -500,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      onSwipeLeft();
      translateX.setValue(0);
    });
  };

  const handleSwipeRight = () => {
    Animated.timing(translateX, {
      toValue: 500,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      onSwipeRight();
      translateX.setValue(0);
    });
  };

  return {
    translateX,
    rotate,
    panResponder,
    handleSwipeLeft,
    handleSwipeRight
  }


}
