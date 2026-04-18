import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getActionIcon, getAvatarIcon, getContentIcon, getKebabIcon } from '../assets';
import { colors, spacing } from '../theme';

export function FeedCard({ item }) {
  const Avatar = getAvatarIcon(item.avatar);
  const Kebab = getKebabIcon(item.kebab);
  const Content = getContentIcon(item.content);
  const Actions = getActionIcon(item.actions);

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Avatar width={64} height={64} />
        <View style={styles.authorBlock}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Kebab width={32} height={32} />
      </View>

      {item.kind === 'meeting' ? (
        <View style={styles.meetingBlock}>
          <Text style={styles.meetingTitle}>{item.title}</Text>
          <Text style={styles.summary} numberOfLines={4}>
            {item.summary}
          </Text>
          <View style={styles.meetingArtWrap}>
            <Content width={310} height={286} />
            <Text style={styles.commentHint}>Ver comentários...</Text>
          </View>
          <Actions width={320} height={30} />

          <View style={styles.actionsRow}>
            <Pressable style={styles.outlineButton}>
              <Text style={styles.outlineButtonLabel}>Detalhes</Text>
            </Pressable>
            <Pressable style={styles.solidButton}>
              <Text style={styles.solidButtonLabel}>Participar</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.postBlock}>
          <Text style={styles.summary} numberOfLines={4}>
            {item.summary}
          </Text>
          <Pressable style={styles.moreButton}>
            <Text style={styles.moreButtonLabel}>...ler mais</Text>
          </Pressable>

          <View style={styles.postArtWrap}>
            <Content width={320} height={294} />
            <Text style={styles.commentHint}>Ver comentários...</Text>
          </View>

          <Actions width={320} height={30} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 7 },
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  authorBlock: {
    flex: 1,
    marginLeft: 6,
  },
  author: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '700',
  },
  time: {
    color: colors.textSubtle,
    fontSize: 16,
    marginTop: 2,
  },
  postBlock: {
    marginTop: 16,
  },
  meetingBlock: {
    marginTop: 16,
  },
  summary: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  moreButton: {
    alignSelf: 'flex-end',
    marginTop: 6,
  },
  moreButtonLabel: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  postArtWrap: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meetingArtWrap: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentHint: {
    color: '#d7d7d7',
    fontSize: 18,
    fontWeight: '600',
    marginTop: -20,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  meetingTitle: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  outlineButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  solidButton: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  outlineButtonLabel: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  solidButtonLabel: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: '700',
  },
});