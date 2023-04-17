import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, FlatList, ScrollView, View, SafeAreaView, TextInput, Button} from 'react-native';
import { dogs, cats } from './breed'
import { useState } from 'react';
import Item from './Item';

export default function App() {
  const [search, setSearch] = useState('');
  const [species, setSpecies] = useState('dogs');

  const toggleSpecies = (newSpecies) => {
    setSpecies(newSpecies);
  };

  let data = species === 'dogs' ? dogs : cats;
  let emojiSpecies = species === 'dogs' ? 'dogs 🐶🐺🐕‍🦺🐩🐕' : 'cats 🐱🐈‍⬛🐈😺🦁';
  const filteredData = data.filter
  (item => item.breed.toLowerCase().includes(search.toLowerCase()));


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="🐶🐺🐕‍🦺🐩🐕" onPress={() => toggleSpecies('dogs')} />
        <Text style={styles.orText}> Or </Text>
        <Button title="🐱🐈‍⬛🐈😺🦁" onPress={() => toggleSpecies('cats')} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search'
          onChangeText={setSearch}
          value={search}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Text style={styles.cancelButton}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text>{emojiSpecies ? `Below is a list of ${emojiSpecies}` : 'Choose a species'}</Text>

      <FlatList style={styles.flatlist}
        data={filteredData}
        renderItem={({ item }) =>
             <Item title={`${item.breed}`} data={item} />
        }
        keyExtractor={item => `${item.breed}+${item.index}` }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginTop: 5,
  },
  flatlist: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    height: 30,
  },
  cancelButton: {
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'black',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 5,
  },
  orText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
