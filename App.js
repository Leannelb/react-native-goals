import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,   TextInput,  View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View>
        <View>
          <TextInput 
            placeholder="Course Goal" 
            style={{ bottomBorderColor: 'black', borderBottomWidth: 1 }} />
          <Button title="ADD" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
