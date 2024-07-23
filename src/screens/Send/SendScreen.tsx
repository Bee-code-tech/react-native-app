import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SendScreenNavigationProp } from '../../types/navigation';
import Header from '../../components/Header';
import Button from '../../components/Button';

interface Props {
  navigation: SendScreenNavigationProp;
}

const SendScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Send something here!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default SendScreen;
