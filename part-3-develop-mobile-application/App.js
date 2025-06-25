import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>

      <View style={styles.tilesContainer}>
        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Staff List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c64c38', // ROI Burnt Orange
    marginBottom: 40,
  },
  tilesContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    backgroundColor: '#d9d9d9', // ROI Light Grey
    width: '47%',
    aspectRatio: 1, // square
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tileText: {
    color: '#262626', // ROI Charcoal
    fontSize: 16,
    fontWeight: '600',
  },
});

