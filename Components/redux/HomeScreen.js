import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addEmployee} from './action';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const handleAddEmployee = () => {
    dispatch(addEmployee({name, age, address, city}));
    setName('');
    setAge('');
    setAddress('');
    setCity('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor={'grey'}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Add" onPress={handleAddEmployee} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    color: 'grey',
  },
});

export default HomeScreen;
