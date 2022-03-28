import React, { useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SuperHeroCard } from '../../components/SuperHeroCard'

import { 
  View,
  FlatList, 
  Alert, 
  ActivityIndicator, 
  StyleSheet ,
} from 'react-native'


import api from '../../services/api'

export function Home() {
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState([])
  // const navigation = useNavigation()

  // function showSuperHeroPowerstats() {
  //   navigation.dispatch(
  //     CommonActions.navigate({
  //       name: 'SuperHeroPowerstats'
  //     })
  //   )
  // }

  function renderItem({ item }) {
    return <SuperHeroCard data={item} />
  }

  async function fetchHeros() {
    try {
      const response = await api.get('/all.json')
      setHeros(response.data)

    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível exibir o Super Heroi.')

    } finally {
      setLoading(false)
    }

  }

  useEffect(() => { 

    fetchHeros()
  }, [])

  return (
    <View
      style={styles.container}
    >
      {loading ?
        <ActivityIndicator
          color='blue'
          size='large'
          style={{ flex: 1 }}
        />
      :
        <FlatList
          data={heros}
          keyExtractor={item => String(item.id)}
          showsHorizontalScrollIndicator={true}
          renderItem={renderItem}
          horizontal={true}
          // onPress={() => showSuperHeroPowerstats}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgba(35, 34, 41, 0.7)',

    margin: 0,
    padding: 30,

  }
})