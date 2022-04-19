import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import api from '../../services/api'
import crashlytics from '@react-native-firebase/crashlytics';

import {
  Alert,
  View,
  Text,
  StyleSheet
} from 'react-native'

export function SuperHeroPowerstats() {
  const [hero, setHero] = useState({})
  const route = useRoute()
  const { id } = route.params

  async function fetchHeroSelected() {
    try {
      const response = await api.get(`id/${id}.json`)
      setHero(response.data.powerstats)
      crashlytics().crash();
      crashlytics().log('Fetch Hero Selected'); 
      crashlytics().setAttribute('name', String(response.data.name))

    } catch (error) {
      crashlytics().recordError(error);
      Alert.alert('Não foi possível exibir o Super Heroi.')
    }
  }

  useEffect(() => { 

    fetchHeroSelected()
  }, [])

  return (

    <View
      style={styles.powerstats}
    >
      <Text
        style={styles.powerstatsName}
      >
        {hero.intelligence} inteligencia
      </Text>
      <Text
        style={styles.powerstatsName}
      >
        {hero.strength} força
      </Text>
      <Text
        style={styles.powerstatsName}
      >
        {hero.speed} velocidade
      </Text>
      <Text
        style={styles.powerstatsName}
      >
        {hero.durability} durabilidade
      </Text>
      <Text
        style={styles.powerstatsName}
      >
        {hero.power} poder
      </Text>
      <Text
        style={styles.powerstatsName}
      >
        {hero.combat} luta
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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