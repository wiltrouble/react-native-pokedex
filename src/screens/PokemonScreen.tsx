import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Navigator, RootStackParams} from '../navigator/Navigator';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { FadeInImage } from '../hooks/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id)

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 5}}
          onPress={() => navigation.pop()}> 
          <Icon name="chevron-left" color="black" size={35} />
        </TouchableOpacity>

        <Text style={{...styles.pokemonName, top: top + 40}}>
          {name + '\n'}#{id}
        </Text>

        <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokeball} />

        <FadeInImage uri={picture} style={styles.pokemonImage}/>
      </View>

      {
        isLoading
        ? (
          <View style={styles.activityIndicator}>
          <ActivityIndicator color={color} size={50}/>
        </View>
        )
        : <PokemonDetails pokemon={pokemon} />
      }


    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
