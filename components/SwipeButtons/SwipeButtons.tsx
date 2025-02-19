import { Pressable } from "react-native"
import { DetailContainerIcons, IconButton } from "./styles"

import CheckIcon from '../../assets/images/check-icon.svg';
import HeartIcon from '../../assets/images/hearth-icon.svg';
import XIcon from '../../assets/images/x-icon.svg';

interface SwipeButtonsProps {
  handleSwipeLeft: () => void
  handleSwipeRight: () => void
  setSuperLike: (superlike: boolean) => void
}

export default function SwipeButtons({ handleSwipeLeft, handleSwipeRight, setSuperLike }: SwipeButtonsProps) {
  return (
    <DetailContainerIcons>
      <Pressable onPress={handleSwipeLeft}>
        <IconButton source={XIcon} />
      </Pressable>
      <Pressable onPress={() => setSuperLike(true)}>
        <IconButton source={HeartIcon} />
      </Pressable>
      <Pressable onPress={handleSwipeRight}>
        <IconButton source={CheckIcon} />
      </Pressable>
    </DetailContainerIcons>
  )
}