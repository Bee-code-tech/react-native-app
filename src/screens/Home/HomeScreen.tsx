import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeScreenNavigationProp } from '../../types/navigation';
import Header from '../../components/Header';
import Button from '../../components/Button';

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Screen!</Text>
        <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
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

export default HomeScreen;
