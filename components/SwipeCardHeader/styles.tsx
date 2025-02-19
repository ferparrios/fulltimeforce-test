import { Image } from 'expo-image';
import styled from 'styled-components/native';


export const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
  position: absolute;
  z-index: 99;
  top: 10px
`;

export const StyledText = styled.Text`
  color: #FFFFFF;
  font-weight: 700;
`;

export const StyledIconContainer = styled.Pressable`
  justify-content: flex-start;
  align-items: center;
  height: 100px
`;

export const StyledImage = styled(Image)`
  width: 80px;
  height: 80px;
  content-fit: cover;
  transition: 1000ms;
`;