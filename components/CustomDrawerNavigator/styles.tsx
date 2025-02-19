import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  background-color: #FEB5DB;
  justify-content: space-evenly;
`;

export const ProfileContainer = styled.View`
  align-items: center;
`;

export const ProfileImageStyled = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50px;
`;

export const ProfileName = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const ProfileLocation = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const RouteContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  padding-vertical: 10px;
  gap: 5px;
`;

export const RouteImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const RouteText = styled.Text`
  color: white;
  font-weight: 700;
`;

export const LogoutContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  gap: 5px;
`;