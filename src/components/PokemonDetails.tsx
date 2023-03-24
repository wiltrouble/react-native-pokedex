import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from '../hooks/FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.regularText, marginRight: 10}}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>weight</Text>
        <Text style={styles.regularText}>{pokemon.weight} KG</Text>
      </View>

      <View style={{...styles.container}}>
        <Text style={styles.title}>Spriter</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
      </ScrollView>

      <View style={{...styles.container}}>
        <Text style={styles.title}>Skills</Text>

        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.regularText, marginRight: 10}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container}}>
        <Text style={styles.title}>Movements</Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{...styles.regularText, marginRight: 10}}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={{...styles.container}}>
        <Text style={styles.title}>Stats</Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.stats.map(({stat}) => (
            <Text
              key={stat.name}
              style={{...styles.regularText, marginRight: 10}}>
              {stat.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 70,
    height: 70,
  },
});
