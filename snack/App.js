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

const screenConfig = {
  home: {
    label: 'Feed',
    title: 'Meets Hub',
    description: 'Descubra publicações e novidades da sua comunidade em tempo real.',
  },
  search: {
    label: 'Explorar',
    title: 'Buscar Grupos',
    description: 'Encontre comunidades, eventos e pessoas com interesses parecidos.',
  },
  create: {
    label: 'Criar',
    title: 'Novo Encontro',
    description: 'Monte eventos e salas ao vivo com poucos toques.',
  },
  chat: {
    label: 'Mensagens',
    title: 'Conversas',
    description: 'Continue o papo com equipes, mentores e participantes.',
  },
  profile: {
    label: 'Perfil',
    title: 'Sua Jornada',
    description: 'Acompanhe conquistas, conexões e evolução na comunidade.',
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const activeScreen = useMemo(() => {
    switch (activeTab) {
      case 'search':
        return <SearchScreen />;
      case 'create':
        return <CreateScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'home':
      default:
        return <HomeScreen />;
    }
  }, [activeTab]);

  const headerInfo = screenConfig[activeTab] || screenConfig.home;

  return (
    <SafeAreaProvider>
      <View style={appStyles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <ExpoStatusBar style="light" />

        <ScreenHeader
          label={headerInfo.label}
          title={headerInfo.title}
          description={headerInfo.description}
        />

        {activeScreen}

        <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />
      </View>
    </SafeAreaProvider>
  );
}