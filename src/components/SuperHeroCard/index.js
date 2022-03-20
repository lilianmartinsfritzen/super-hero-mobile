import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image 
} from 'react-native'

export function SuperHeroCard(props) {

  return (
    <View
      style={styles.content}
    >
      <Text
        style={styles.superHeroName}
      >
        {props.heroData.name}
      </Text>

      <Image 
        source={{uri: props.heroData.images.md}} 
        style={{
          resizeMode: "contain",
          width: 320,
          height: 480
        }}
      />

      <View
        style={styles.powerstats}
      >
        <Text
          style={styles.powerstatsName}
        >
          {props.heroData.powerstats.intelligence} inteligencia
        </Text>
        <Text
          style={styles.powerstatsName}
        >
          {props.heroData.powerstats.strength} força
        </Text>
        <Text
          style={styles.powerstatsName}
        >
          {props.heroData.powerstats.speed} velocidade
        </Text>
        <Text
          style={styles.powerstatsName}
        >
          {props.heroData.powerstats.durability} durabilidade
        </Text>
        <Text
          style={styles.powerstatsName}
        >
          {props.heroData.powerstats.power} poder
        </Text>
        <Text
          style={styles.powerstatsName}
        >
          {props.heroData.powerstats.combat} luta
        </Text> 
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  superHeroName: {
    fontSize: 30,
    color: 'rgba(235, 141, 34, 0.7)',
  
    marginBottom: 10,
  },
  powerstats: {
    width: '50%',
    padding: 5,
    margin: 5,
  
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  powerstatsName: {
    fontSize: 16,
    color: 'rgba(14, 210, 240, 0.7)',
    padding: 10,
  }
})
