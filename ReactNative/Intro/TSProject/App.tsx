import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';

export default function App() {

  ToastAndroid.show('This is a test toast', ToastAndroid.SHORT);
  ToastAndroid.showWithGravity(
    'Gravity toast',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  )

  return (
    <View style={styles.holder}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.mainText}>TESTING123</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5
  },
  holder: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    backgroundColor: 'red',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 40
  }
});
