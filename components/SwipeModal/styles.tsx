import { Image } from 'expo-image';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


export const { height } = Dimensions.get('window');

export const ModalContainer = styled.View`
  background-color: white;
  padding-top: 35px;
  align-items: center;
  height: ${height}px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-horizontal: 20px;
  position: absolute;
  top: 40px;
  z-index: 99;
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const UserImage = styled(Image)`
  width: 100%;
  height: ${height * 0.4}px;
  resize-mode: cover;
`;

export const UserInfoContainer = styled.View`
  padding: 50px;
  align-items: flex-start;
  border-top-left-radius: 50px;
  height: ${height * 0.6}px;
  background-color: white;
`;

export const UserInfoText = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: 700;
`;

export const UserLocationText = styled.Text`
  font-size: 18px;
  color: black;
`;

export const ModalIconButton = styled(Image)`
  width: 28px;
  height: 28px;
`;

export const InterestsContainer = styled.View`
  padding-top: 35px;
`;

export const InterestsTitle = styled.Text`
  color: black;
  font-size: 24px;
`;

export const InterestsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const InterestItem = styled.View`
  background-color: red;
  border-radius: 20px;
  padding-horizontal: 15px;
  padding-vertical: 10px;
`;

export const InterestText = styled.Text`
  font-size: 18px;
  color: white;
`;

export const IconButton = styled(Image)`
  width: 50px;
  height: 50px;
  content-fit: cover;
`;

export const ButtonsContainer = styled.View`
  padding-left: 20px;
  padding-right: 30;
  padding-top: 20;
`