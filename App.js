import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Encabezado</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1328',
  },
  header: {
    height: 100,
    backgroundColor: '#202132',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
