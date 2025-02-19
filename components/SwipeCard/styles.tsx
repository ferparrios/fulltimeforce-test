import { Image } from 'expo-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Card = styled.View`
  width: 100%;
  height: 95%;
  border-radius: 30px;
  box-shadow: 0px 5px 6.68px rgba(0, 0, 0, 0.36);
  elevation: 11;
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  justify-content: flex-end;
  resize-mode: cover;
`;

export const CardContent = styled.View`
  padding: 10px 0px;
`;

export const UserNameText = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 700;
`;

export const UserLocationText = styled.Text`
  font-size: 18px;
  color: white;
  line-height: 25px;
`;

export const DetailContainer = styled.View`
  margin-horizontal: 20px;
  padding-bottom: 20px;
`;

export const InfoIconButton = styled(Image)`
  width: 50px;
  height: 50px;
  content-fit: cover;
`;

export const InfoUserContaner = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InfoUserTexts = styled.View`
  flex-direction: column;
`;

export const SlideIconContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(52, 52, 52, 0.7);
  width: 100%;
  height: 100%;
`;

export const SlideIcon = styled(Image)`
  width: 100px;
  height: 100px;
`;

export const MatchIconContainer = styled.Pressable`
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(52, 52, 52, 0.7);
  width: 100%;
  height: 100%;
`;

export const MatchIcon = styled(Image)`
  width: 200px;
  height: 140px;
`;