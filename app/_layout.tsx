import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect, useState } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Drawer from 'expo-router/drawer';
import CustomDrawerNavigator from '@/components/CustomDrawerNavigator/CustomDrawerNavigator';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import MenuIcon from '../assets/images/menu-icon.svg';
import FilterIcon from '../assets/images/filter-icon.svg';
import { UsersProvider } from '@/context/UsersProvider';
import { UsersContext } from '@/context/UsersContext';
import { usersAmistad, usersCitas } from '@/utils/mockData';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UsersProvider>
      <AppContent />
    </UsersProvider>
  );
}

function AppContent() {
  const { users, isDrawerOpen } = useContext(UsersContext);
  const [color, setColor] = useState<string>("#9072E5");


  const handleBackgroundColor = () => {
    if (users === usersAmistad) {
      setColor("#9072E5");
    } else if (users === usersCitas) {
      setColor("#FFB03A");
    } else {
      setColor("#FF6B86");
    }
  };

  useEffect(() => {
    handleBackgroundColor();
  }, [users]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        backBehavior="initialRoute"
        drawerContent={(props) => <CustomDrawerNavigator {...props} />}
        screenOptions={{
          overlayColor: 'transparent',
          headerStyle: {
            backgroundColor: isDrawerOpen ? "#FEB5DB" : color,
            shadowColor: "transparent",
            elevation: 0,
          },
          drawerStyle: {
            width: '50%',
          },
          drawerType: 'slide',
        }}
      >
        <Drawer.Screen
          name="home"
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View style={{ marginLeft: 15 }}>
                  <Image source={MenuIcon} style={{ width: 24, height: 24 }} />
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Esto')}>
                <View style={{ marginRight: 15 }}>
                  <Image source={FilterIcon} style={{ width: 24, height: 24 }} />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name='match'
          options={{
            headerShown: false
          }}
        >
        </Drawer.Screen>
      </Drawer>
    </GestureHandlerRootView>
  );
}