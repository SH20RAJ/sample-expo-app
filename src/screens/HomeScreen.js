import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    navigation.navigate('Note', {
      saveNote: (note) => setNotes([...notes, note]),
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.note}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  note: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default HomeScreen;
