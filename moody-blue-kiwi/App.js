import React, { useMemo, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { BottomNav } from './components/BottomNav';
import { ScreenHeader } from './components/ScreenHeader';
import { HomeScreen } from './screens/HomeScreen';
import { SearchScreen } from './screens/SearchScreen';
import { CreateScreen } from './screens/CreateScreen';
import { ChatScreen } from './screens/ChatScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { appStyles } from './styles/appStyles';
import { colors } from './styles/colors';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const ActiveScreen = useMemo(() => {
    switch (activeTab) {
      case 'search':
        return SearchScreen;
      case 'create':
        return CreateScreen;
      case 'chat':
        return ChatScreen;
      case 'profile':
        return ProfileScreen;
      case 'home':
      default:
        return HomeScreen;
    }
  }, [activeTab]);


  return (
    <SafeAreaProvider>
      <View style={appStyles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <ExpoStatusBar style="light" />

        <ScreenHeader/>

        <ActiveScreen/>

        <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />
      </View>
    </SafeAreaProvider>
  );
}