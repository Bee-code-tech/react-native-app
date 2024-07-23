import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface BoxComponentProps {
  text: string;
  icon: string;
  backgroundColor?: string;
  textColor?: string;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ text, icon, backgroundColor = '#fff', textColor = '#000' }) => {
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={[styles.boxText, { color: textColor }]}>{text}</Text>
      <Image source={require(`../assets/images/${icon}`)} style={styles.boxIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  boxText: {
    fontSize: 16,
  },
  boxIcon: {
    width: 24,
    height: 24,
  },
});

export default BoxComponent;
