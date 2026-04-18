import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const feedItems = [
  {
    id: 'post-1',
    kind: 'post',
    author: 'sailor.moon',
    time: '2 semanas',
    summary:
      'Um representante do setor de transportes afirmou que o cliche do caminhao-kun pode estar criando uma imagem negativa desses veiculos em animes isekai.',
  },
  {
    id: 'meeting-1',
    kind: 'meeting',
    author: 'sailor.moon',
    time: '2 semanas',
    title: 'Call of Duty Punch Ball',
    summary:
      'Um encontro para compartilhar estrategias, mostrar conteudo e decidir os proximos passos da comunidade.',
  },
  {
    id: 'post-2',
    kind: 'post',
    author: 'sailor.moon',
    time: '2 semanas',
    summary:
      'Mais um recorte do mesmo tema, agora apresentado como uma publicacao curta com destaque visual e area de acoes.',
  },
];

function Avatar() {
  return (
    <View style={styles.avatarOuter}>
      <View style={styles.avatarInner} />
    </View>
  );
}

function TopBarIcon({ label }) {
  return (
    <View style={styles.topIcon}>
      <Text style={styles.topIconText}>{label}</Text>
    </View>
  );
}

function ArtPlaceholder({ label }) {
  return (
    <View style={styles.artBox}>
      <Text style={styles.artText}>{label}</Text>
    </View>
  );
}

function ActionRow() {
  return (
    <View style={styles.actionRow}>
      <View style={styles.actionDot} />
      <View style={styles.actionDot} />
      <View style={styles.actionDot} />
      <View style={styles.actionDot} />
    </View>
  );
}

function FeedCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Avatar />
        <View style={styles.cardHeaderText}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.kebab}>...</Text>
      </View>

      {item.kind === 'meeting' ? (
        <View style={styles.bodyWrap}>
          <Text style={styles.meetingTitle}>{item.title}</Text>
          <Text style={styles.summary}>{item.summary}</Text>
          <View style={styles.space12} />
          <ArtPlaceholder label="Conteudo da reuniao" />
          <Text style={styles.comments}>Ver comentarios...</Text>
          <ActionRow />

          <View style={styles.meetingButtons}>
            <Pressable style={styles.outlineBtn}>
              <Text style={styles.outlineBtnText}>Detalhes</Text>
            </Pressable>
            <Pressable style={styles.solidBtn}>
              <Text style={styles.solidBtnText}>Participar</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.bodyWrap}>
          <Text style={styles.summary}>{item.summary}</Text>
          <Text style={styles.readMore}>...ler mais</Text>
          <View style={styles.space12} />
          <ArtPlaceholder label="Conteudo do post" />
          <Text style={styles.comments}>Ver comentarios...</Text>
          <ActionRow />
        </View>
      )}
    </View>
  );
}

function BottomNav() {
  const tabs = ['Home', 'Buscar', 'Criar', 'Meet', 'Perfil'];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab, index) => {
        const active = index === 0;
        return (
          <View key={tab} style={styles.tabItem}>
            <View style={[styles.tabIcon, active && styles.tabIconActive]} />
            <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{tab}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#9c2222" />
      <ExpoStatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.topBar}>
          <TopBarIcon label="M" />
          <Text style={styles.logo}>NEXUS</Text>
          <TopBarIcon label="N" />
        </View>

        <Text style={styles.headerLabel}>Feed</Text>
        <Text style={styles.headerTitle}>Comunidade criativa</Text>
        <Text style={styles.headerDescription}>
          Layout para Snack com FlatList, inspirado na base reutilizavel.
        </Text>
      </View>

      <FlatList
        data={feedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedCard item={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        showsVerticalScrollIndicator={false}
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
  topIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#f1d9d2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topIconText: {
    color: '#9c2222',
    fontWeight: '800',
  },
  logo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
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
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#9c2222',
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarOuter: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#9c2222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fdfdfd',
  },
  cardHeaderText: {
    flex: 1,
    marginLeft: 10,
  },
  author: {
    color: '#9c2222',
    fontSize: 22,
    fontWeight: '700',
  },
  time: {
    color: '#b7b7b7',
    fontSize: 15,
  },
  kebab: {
    color: '#9c2222',
    fontSize: 24,
    fontWeight: '900',
    paddingHorizontal: 8,
  },
  bodyWrap: {
    marginTop: 14,
  },
  meetingTitle: {
    color: '#9c2222',
    fontSize: 23,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },
  summary: {
    color: '#2f2f2f',
    fontSize: 16,
    lineHeight: 22,
  },
  readMore: {
    alignSelf: 'flex-end',
    marginTop: 6,
    color: '#9c2222',
    fontWeight: '700',
    fontSize: 15,
  },
  space12: {
    height: 12,
  },
  artBox: {
    height: 210,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#9c2222',
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artText: {
    color: '#9c2222',
    fontWeight: '700',
  },
  comments: {
    color: '#cfcfcf',
    fontSize: 18,
    marginTop: 8,
  },
  actionRow: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },
  actionDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#9c2222',
    opacity: 0.9,
  },
  meetingButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  outlineBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9c2222',
    borderRadius: 18,
    alignItems: 'center',
    paddingVertical: 11,
  },
  outlineBtnText: {
    color: '#9c2222',
    fontWeight: '700',
    fontSize: 15,
  },
  solidBtn: {
    flex: 1,
    backgroundColor: '#9c2222',
    borderRadius: 18,
    alignItems: 'center',
    paddingVertical: 11,
  },
  solidBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  bottomNav: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#9c2222',
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#d9d9d9',
  },
  tabIconActive: {
    backgroundColor: '#9c2222',
  },
  tabLabel: {
    marginTop: 3,
    color: '#888',
    fontSize: 11,
    fontWeight: '700',
  },
  tabLabelActive: {
    color: '#9c2222',
  },
});
