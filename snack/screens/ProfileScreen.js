import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { screenStyles } from '../styles/screenStyles';

const achievements = [
  { id: '1', title: 'Host em destaque', subtitle: '4 eventos criados este mês' },
  { id: '2', title: 'Conector da comunidade', subtitle: '128 conexões ativas' },
  { id: '3', title: 'Mentor ativo', subtitle: '12 sessões concluídas' },
];

export function ProfileScreen() {
  return (
    <FlatList
      data={achievements}
      keyExtractor={(item) => item.id}
      contentContainerStyle={screenStyles.listContent}
      ItemSeparatorComponent={() => <View style={screenStyles.separator} />}
      renderItem={({ item, index }) => (
        <View style={screenStyles.sectionCard}>
          <View style={[screenStyles.rowItem, index === achievements.length - 1 && screenStyles.rowItemLast]}>
            <View>
              <Text style={screenStyles.rowTitle}>{item.title}</Text>
              <Text style={screenStyles.rowSubtitle}>{item.subtitle}</Text>
            </View>
          </View>
        </View>
      )}
      ListHeaderComponent={
        <View style={screenStyles.sectionCard}>
          <View style={screenStyles.profileHeader}>
            <Text style={screenStyles.profileAvatar}>🧑‍💻</Text>
            <Text style={screenStyles.profileName}>Gabriel Rodrigues</Text>
            <Text style={screenStyles.profileRole}>Organizador de Meetups</Text>
          </View>

          <View style={screenStyles.statsRow}>
            <View style={screenStyles.statBlock}>
              <Text style={screenStyles.statValue}>24</Text>
              <Text style={screenStyles.statLabel}>Eventos</Text>
            </View>
            <View style={screenStyles.statBlock}>
              <Text style={screenStyles.statValue}>128</Text>
              <Text style={screenStyles.statLabel}>Conexões</Text>
            </View>
            <View style={screenStyles.statBlock}>
              <Text style={screenStyles.statValue}>4.9</Text>
              <Text style={screenStyles.statLabel}>Avaliação</Text>
            </View>
          </View>
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
