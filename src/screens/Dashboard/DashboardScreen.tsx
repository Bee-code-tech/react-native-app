import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DashboardScreenNavigationProp } from '../../types/navigation';
import Header from '../../components/Header';
import Button from '../../components/Button';

interface Props {
  navigation: DashboardScreenNavigationProp;
}

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Dashboard Screen" />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Dashboard!</Text>
        <Button title="Go to Send" onPress={() => navigation.navigate('Send')} />
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

export default DashboardScreen;