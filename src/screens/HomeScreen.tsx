import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();
  console.log(simplePokemonList);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokebolaBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={simplePokemonList}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          keyExtractor={pokemon => pokemon.id}
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 }
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="gray" />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
