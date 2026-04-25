import React from 'react';
import { FlatList, View } from 'react-native';
import { FeedCard } from '../components/FeedCard';
import { feedItems } from '../data/feedItems';
import { screenStyles } from '../styles/screenStyles';

export function HomeScreen() {
  return (
    <FlatList
      data={feedItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FeedCard item={item} />}
      contentContainerStyle={screenStyles.listContent}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={screenStyles.separator} />}
    />
  );
}
