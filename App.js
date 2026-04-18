import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { uiIcons } from './src/assets';
import { BottomNav } from './src/components/BottomNav';
import { FeedCard } from './src/components/FeedCard';
import { feedItems } from './src/data/feed';

export default function App() {
  const MenuIcon = uiIcons.menu;
  const LogoIcon = uiIcons.logo;
  const NotificationIcon = uiIcons.notification;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#9c2222" />
      <ExpoStatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.topBar}>
          <MenuIcon width={34} height={34} />
          <LogoIcon width={132} height={34} />
          <NotificationIcon width={34} height={34} />
        </View>

        <Text style={styles.headerLabel}>Feed</Text>
        <Text style={styles.headerTitle}>Comunidade criativa</Text>
        <Text style={styles.headerDescription}>
          Cards montados com a base visual do diretório reutilizaveis e renderizados com FlatList.
        </Text>
      </View>

      <FlatList
        data={feedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f0ea',
  },
  header: {
    backgroundColor: '#9c2222',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerLabel: {
    color: '#f8e7df',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 6,
  },
  headerDescription: {
    color: '#f1d9d2',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    maxWidth: 340,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 120,
  },
  separator: {
    height: 16,
  },
});