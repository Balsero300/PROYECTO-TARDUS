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
  function handlePress() {
    console.log('Caja presionada');
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <TouchableOpacity onPress={handlePress} style={styles.touchable}>
          <Text>Caja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(37, 48, 113)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 8,
    borderRadius: 20,
    borderColor: 'rgb(225, 140, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'blue',
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
