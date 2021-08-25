import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Edit Profile Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
