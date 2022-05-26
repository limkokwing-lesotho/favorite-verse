import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React from 'react';

export default function VerseList({ verses }) {
  function transform(item) {
    return (
      <View style={styles.card} key={item.reference}>
        <Text>{item.text}</Text>
        <Text style={styles.reference}>{item.reference}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {verses.map((verse) => transform(verse))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 10,
    borderColor: '#999',
    borderBottomWidth: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  card: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CFD8DC',
    borderLeftWidth: 5,
    borderLeftColor: '#90A4AE',
  },
  reference: {
    fontSize: 13,
    color: '#999',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
