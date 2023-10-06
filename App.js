import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Encabezado</Text>
    </View>
  );
};

const data = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  // Agrega más elementos según tus necesidades
];

const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={data}
        renderItem={() => (
          <View style={styles.box} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.centered}
      />
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
  box: {
    width: 250,
    height: 70,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: 'white', // Establece el color aquí
  },
  centered: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
