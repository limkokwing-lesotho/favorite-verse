import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import VerseList from './VerseList';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function App() {
  const [input, setInput] = useState('');
  const [verses, setVerses] = useState([]);

  function addVerse() {
    axios.get('https://bible-api.com/' + input).then((response) => {
      setVerses([...verses, response.data]);
      setInput('');
    });
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name='book' size={37} color='white' />
          <Text style={styles.title}>Favorite Verses</Text>
        </View>
        <View style={styles.controls}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.btn} onPress={addVerse}>
            <Entypo name='add-to-list' size={22} color='white' />
          </TouchableOpacity>
        </View>
        <VerseList verses={verses} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    backgroundColor: '#1877F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    borderWidth: 2.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderColor: '#fff',
  },
  controls: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#1877F2',
    color: '#fff',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginLeft: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    flex: 4,
    borderRadius: 3,
    padding: 7,
    marginRight: 10,
  },
});
