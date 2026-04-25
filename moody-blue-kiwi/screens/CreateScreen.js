import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { screenStyles } from '../styles/screenStyles';

const createOptions = [
  { id: '1', icon: 'calendar-plus', title: 'Criar Evento', subtitle: 'Agende meetup com data e convite.' },
  { id: '2', icon: 'video-plus', title: 'Abrir Sala Ao Vivo', subtitle: 'Inicie uma conversa em vídeo agora.' },
  { id: '3', icon: 'post-outline', title: 'Publicar Atualização', subtitle: 'Compartilhe novidades com sua rede.' },
];

export function CreateScreen() {
  return (
    <FlatList
      data={createOptions}
      keyExtractor={(item) => item.id}
      contentContainerStyle={screenStyles.listContent}
      ItemSeparatorComponent={() => <View style={screenStyles.separator} />}
      renderItem={({ item, index }) => (
        <View style={screenStyles.sectionCard}>
          <View style={[screenStyles.rowItem, index === createOptions.length - 1 && screenStyles.rowItemLast]}>
            <View style={screenStyles.rowLeft}>
              <MaterialCommunityIcons name={item.icon} size={22} color={colors.primary} />
              <View>
                <Text style={screenStyles.rowTitle}>{item.title}</Text>
                <Text style={screenStyles.rowSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={screenStyles.createButton}>
            <Text style={screenStyles.createButtonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      )}
      ListHeaderComponent={
        <View style={screenStyles.sectionCard}>
          <Text style={screenStyles.sectionTitle}>Ferramentas de criação</Text>
          <Text style={screenStyles.sectionText}>
            Escolha o formato ideal para organizar encontros e manter sua comunidade ativa.
          </Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
