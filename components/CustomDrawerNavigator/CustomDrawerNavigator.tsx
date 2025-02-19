import { View, TouchableOpacity, Platform, Pressable } from "react-native";
import { Image } from "expo-image";
import ProfileImage from '../../assets/images/user-avatar.png';
import CloseIcon from '../../assets/images/white-close-icon.svg'
import CloseSessionIcon from '../../assets/images/drawer-icon-7.svg'
import { routes } from "@/utils/mockData";
import { DrawerContentComponentProps, useDrawerStatus } from '@react-navigation/drawer';
import { useContext, useEffect } from "react";
import { UsersContext } from "@/context/UsersContext";
import { Container, ProfileContainer, ProfileImageStyled, ProfileName, ProfileLocation, RouteContainer, RouteImage, RouteText, LogoutContainer } from "./styles";

const platform = Platform.OS == 'android'

export default function CustomDrawerNavigator(props: DrawerContentComponentProps) {

  const { setIsDrawerOpen } = useContext(UsersContext)

  const isDrawerOpen = useDrawerStatus() === 'open';

  useEffect(() => {
    setIsDrawerOpen(isDrawerOpen)
  }, [isDrawerOpen])

  return (
    <Container>
      <Pressable style={{
        position: 'absolute',
        top: platform ? 10 : 40,
        left: 20
      }}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Image source={CloseIcon} style={{
          width: 24, height: 24
        }} />
      </Pressable>
      <ProfileContainer>
        <ProfileImageStyled source={ProfileImage} />
        <ProfileName>Andrea, 20</ProfileName>
        <ProfileLocation>Surco</ProfileLocation>
      </ProfileContainer>

      <View>
        {routes.map((route) => (
          <TouchableOpacity
            key={route.route}
            onPress={() => props.navigation.navigate('home')}
          >
            <RouteContainer>
              <RouteImage source={route.icon} />
              <RouteText>{route.route}</RouteText>
            </RouteContainer>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
          <LogoutContainer>
            <RouteImage source={CloseSessionIcon} />
            <RouteText>Cerrar Sesión</RouteText>
          </LogoutContainer>
        </TouchableOpacity>
      </View>
    </Container>
  );
}