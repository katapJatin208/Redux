import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState(' ');
  const [password, setPasword] = useState(' ');
  const [useNameError, setUserNameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const validation = () => {
    if (userName === ' ') {
      setUserNameError('Please enter UserName');
    } else if (password === ' ') {
      setPasswordError('Please enter Password');
    } else {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: userName,
        password: password,
      });

      console.log(response.data.token);

      console.warn('Login Successful', 'You are now logged in.');
      navigation.navigate('TabNavigation');
    } catch (error) {
      console.warn('Login Failed', 'Invalid email or password.');
      navigation.navigate('TabNavigation');
    }
  };

  return (
    <View>
      <Image
        source={require('../Images/pinterest.png')}
        style={{
          height: 250,
          width: 250,
          alignSelf: 'center',
          marginTop: 45,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 35,
          fontWeight: '600',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Login
      </Text>
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: 20, color: 'black', marginLeft: 30}}>
          Username:
        </Text>
        {userName === ' ' ? (
          <Text style={{color: 'red', marginLeft: 35}}>{useNameError}</Text>
        ) : null}
        <TextInput
          placeholder="Please Enter Username "
          onChangeText={text => setUserName(text)}
          placeholderTextColor={'grey'}
          value={userName}
          style={{
            borderColor: 'grey',
            borderWidth: 2,
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 25,
            color: 'grey',
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 20, color: 'black', marginLeft: 30}}>
          Password:
        </Text>
        {password === ' ' ? (
          <Text style={{color: 'red', marginLeft: 35}}>{passwordError}</Text>
        ) : null}
        <TextInput
          placeholder="Please Enter Password "
          onChangeText={text => setPasword(text)}
          placeholderTextColor={'grey'}
          value={password}
          style={{
            borderColor: 'grey',
            borderWidth: 2,
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 25,
            color: 'grey',
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            width: '90%',
            paddingVertical: 15,
            alignItems: 'center',
            marginTop: 25,
            alignSelf: 'center',
            borderRadius: 25,
          }}
          onPress={validation}>
          <Text style={{textAlignVertical: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
