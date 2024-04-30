import {View, Text, SafeAreaView, Image, ViewComponent} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigationLog();
    }, 2000);
  }, []);

  const navigationLog = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Images/pinterest.png')}
        style={{height: 450, width: 350, resizeMode: 'contain'}}
      />
      <Text style={{fontSize: 30, fontWeight: '500', color: 'red'}}>
        Welcome to SpringCT
      </Text>
    </View>
  );
}
