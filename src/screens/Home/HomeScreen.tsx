import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/img.png')} 
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => navigation.navigate('Send')}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Receive</Text>
      <Text style={styles.text}>Connect</Text>
      <TouchableOpacity
        style={styles.goToDashboardButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.dashboardText}>Go to dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020912',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dashboardText: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
  },
  image: {
    width: width * 0.9, // Adjust as needed
    height: height * 0.4, // Adjust as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginBottom: 20,
    marginTop: 40,
  },
  goToDashboardButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
    marginVertical: 10,
  },
});

export default HomeScreen;
