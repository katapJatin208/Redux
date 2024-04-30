import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const EmployeesScreen = () => {
  const employees = useSelector(state => state.employees);

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              marginTop: 15,
              alignSelf: 'center',
              borderWidth: 2,
              borderColor: 'grey',
              padding: 30,
            }}>
            <Text style={{color: 'grey'}}>Name: {item.name}</Text>
            <Text style={{color: 'grey'}}>Age: {item.age}</Text>
            <Text style={{color: 'grey'}}>Address: {item.address}</Text>
            <Text style={{color: 'grey'}}>City: {item.city}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default EmployeesScreen;
