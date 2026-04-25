import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { screenStyles } from '../styles/screenStyles';

const discoverItems = [
  { id: '1', title: 'React Native BH', subtitle: '42 membros ativos', tag: 'Popular' },
  { id: '2', title: 'Design Systems Brasil', subtitle: '18 eventos este mês', tag: 'Novo' },
  { id: '3', title: 'Noite de Deploy', subtitle: 'Meetup sexta 19h', tag: 'Hoje' },
];

export function SearchScreen() {
  return (
    <FlatList
      data={discoverItems}
      keyExtractor={(item) => item.id}
      contentContainerStyle={screenStyles.listContent}
      ItemSeparatorComponent={() => <View style={screenStyles.separator} />}
      renderItem={({ item, index }) => (
        <View style={screenStyles.sectionCard}>
          <View style={[screenStyles.rowItem, index === discoverItems.length - 1 && screenStyles.rowItemLast]}>
            <View style={screenStyles.rowLeft}>
              <MaterialCommunityIcons name="compass-outline" size={22} color={colors.primary} />
              <View>
                <Text style={screenStyles.rowTitle}>{item.title}</Text>
                <Text style={screenStyles.rowSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <Text style={screenStyles.badge}>{item.tag}</Text>
          </View>
        </View>
      )}
      ListHeaderComponent={
        <View style={screenStyles.sectionCard}>
          <Text style={screenStyles.sectionTitle}>Sugestões para você</Text>
          <Text style={screenStyles.sectionText}>
            Explore comunidades, eventos e salas ao vivo com base nos seus interesses.
          </Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
