import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { headerStyles } from '../styles/headerStyles';

export function ScreenHeader({ label, title, description }) {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.topBar}>
        <MaterialCommunityIcons name="menu" size={28} color="#ffffff" />
        <Text style={headerStyles.logo}>Meets</Text>
        <MaterialCommunityIcons name="bell-outline" size={28} color="#ffffff" />
      </View>


    </View>
  );
}
