import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions  } from 'react-native';

const { width, height } = Dimensions.get('window');

const SendScreen = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleBox = () => {
    if (boxVisible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setBoxVisible(false));
    } else {
      setBoxVisible(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const boxTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleBox} style={styles.avatar}>
        <Image source={require('../../assets/images/avatar.png')} style={styles.radius} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Tap to send</Text>
      <Text style={styles.subHeaderText}>Long tap to receive</Text>
      <TouchableOpacity onPress={toggleBox} style={styles.image}>
        <Image   
        source={require('../../assets/images/icon.png')}
        style={styles.image}/>
      </TouchableOpacity>
     

      {boxVisible && (
        <Animated.View style={[styles.animatedBox, { transform: [{ translateY: boxTranslateY }] }]}>
          <View style={styles.dash} />
          <View style={styles.greetingContainer}>
            <View style={styles.greetingText}>
              <Text style={styles.greeting}>Good afternoon</Text>
              <Text style={styles.name}>Joshua Ajiboye</Text>
            </View>
            <Image source={require('../../assets/images/avatar.png')} style={styles.smallAvatar} />
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.blueBox}>
              <Image source={require('../../assets/images/card.png')} style={styles.icon} />
            </View>
            <View style={styles.orangeBox}>
              <Image source={require('../../assets/images/boy.png')} style={styles.icon} />
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020912',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    right: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  subHeaderText: {
    color: 'grey',
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: width * 0.9, 
    height: height * 0.4,
    resizeMode: 'contain',
    marginTop: 20,
  },
  animatedBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '33%',
    backgroundColor: '#101A1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 20,
    zIndex: 10,
  },
  dash: {
    width: 40,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 2.5,
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  greetingText: {
    flexDirection: 'column',
  },
  greeting: {
    color: 'white',
    fontSize: 18,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  smallAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  radius: {
    borderRadius: 50,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    gap: 15,
  },
  blueBox: {
    backgroundColor: '#EB5757',
    width: '50%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  orangeBox: {
    backgroundColor: '#8186FF',
    width: '50%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  
    borderRadius: 20,
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

export default SendScreen;
