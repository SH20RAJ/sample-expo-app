import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteScreen = ({ route, navigation }) => {
  const [note, setNote] = useState('');

  const saveNote = () => {
    route.params.saveNote(note);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter note"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default NoteScreen;
