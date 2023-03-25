import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const SearchScreen = () => {
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const { top } = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    setPokemonFiltered(
      simplePokemonList.filter((poke) =>
        poke.name.toLowerCase().includes(term.toLowerCase()),
      ),
    );
  }, [term]);

  const screenWidth = Dimensions.get('window').width;

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />

      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              paddingTop: 10,
              marginTop: Platform.OS === 'ios' ? top + 40 : top + 60,
            }}>
            {term}
          </Text>
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={pokemonFiltered}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={pokemon => pokemon.id}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
