import { Image } from 'expo-image';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Platform, TextInput } from 'react-native';
import styled from 'styled-components/native';
import HeartImage from '../assets/images/hearth-image.svg'

const platform = Platform.OS == 'ios'



export default function MatchScreen() {
  const { user } = useLocalSearchParams();
  const navigation = useNavigation()

  const userData = JSON.parse(user as string);

  const ScreenBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
    resize-mode: cover;
  `;

  const Container = styled.View`
    justify-content: flex-end;
    align-items: center;
    height: 100%
  `

  const HeartImageContainer = styled(Image)`
    width: 100px;
    height: 100px;
  `

  const NewText = styled.Text`
    font-size: 30px;
    color: white;
    font-weight: 700
  `

  const MatchText = styled.Text`
    font-size: 70px;
    color: white;
    font-weight: 700
  `

  const HeaderText = styled.Text`
    color: white;
    font-weight: 700;
    padding-vertical: 10px;
  `

  const BodyText = styled.Text`
    color: white;
    padding-top: 5px;
    padding-bottom: 10px
  `

  const TextInputForm = styled.View`
    height: 50px;
    margin: 12px;
    borderWidth: 1px;
    justify-content: center;
    padding-horizontal: 25px;
    backgroundColor: white;
    borderRadius: 30px;
    width: 85%;
  `

  const ReturnButton = styled.Pressable`
  padding-top: 20px;
  padding-bottom: 40px
  `

  const LinkText = styled.Text`
    color: white;
  `

  const SendButton = styled.Pressable`
    position: absolute;
    top: 30%;
    right: 20px
  `

  const SendButtonText = styled.Text`
    color: #FF58A4; 
    font-weight: 700
  `

  return (

    <ScreenBackground
      source={{ uri: userData.image }}
    >
      <Container>
        <HeartImageContainer source={HeartImage} />
        <NewText>New</NewText>
        <MatchText>MATCH!</MatchText>
        <HeaderText>¡También le gustas a {userData.name}!</HeaderText>
        <BodyText>Estas más cerca de tener su amistad</BodyText>
        <TextInputForm>
          <TextInput
            placeholder="Dile algo agradable"
            placeholderTextColor={platform ? '#727272' : 'black'}
          />
          <SendButton>
            <SendButtonText>ENVIAR</SendButtonText>
          </SendButton>
        </TextInputForm>
        <ReturnButton onPress={() => navigation.navigate('home')}>
          <LinkText>Regresar a Lecafé</LinkText>
        </ReturnButton>
      </Container>
    </ScreenBackground>
  );
}