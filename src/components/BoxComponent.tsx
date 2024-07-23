import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface BoxComponentProps {
  text: string;
  icon: string;
  backgroundColor?: string;
  textColor?: string;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ text, icon, backgroundColor = '#fff', textColor = '#000' }) => {

     // Define the images object locally
  const images: { [key: string]: ImageSourcePropType } = {
    'card.png': require('../assets/images/card.png'),
    'boy.png': require('../assets/images/boy.png'),
   
  };
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={[styles.boxText, { color: textColor }]}>{text}</Text>
      <Image source={images[icon]} style={styles.boxIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    height: 80,
    padding: 15,
    marginVertical: 10,
  },
  boxText: {
    fontSize: 26,
  },
  boxIcon: {
    width: 54,
    height: 54,
  },
});

export default BoxComponent;
