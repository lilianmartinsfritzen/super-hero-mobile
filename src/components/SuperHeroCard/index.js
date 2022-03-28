import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image 
} from 'react-native'

export function SuperHeroCard(props) {
  const navigation = useNavigation()
  const { id } = props.data
  
  function showSuperHeroPowerstats() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SuperHeroPowerstats',
        params: {
          id
        }
      })
    )
  }

  return (
    <TouchableOpacity
      style={styles.content}
      onPress={showSuperHeroPowerstats}
    >
      <Text
        style={styles.superHeroName}
      >
        {props.data.name}
      </Text>

      <Image 
        source={{uri: props.data.images.md}} 
        style={{
          resizeMode: "contain",
          width: 320,
          height: 400,
          marginRight: 30 
        }}
      />
    </TouchableOpacity>
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
  }
})
