import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { navIcons } from '../assets';
import { colors } from '../theme';
import { navItems } from '../data/feed';

export function BottomNav() {
  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const Icon = navIcons[item.icon];

        return (
          <Pressable key={item.id} style={styles.navItem}>
            <View style={[styles.iconWrap, item.active && styles.iconWrapActive]}>
              <Icon width={24} height={24} />
            </View>
            <Text style={[styles.label, item.active && styles.labelActive]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 14,
    backgroundColor: colors.surface,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: '#f3e0dc',
  },
  label: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
  },
  labelActive: {
    color: colors.primary,
  },
});