import React, { useEffect, useState } from 'react'
import { FlatList, Alert, ActivityIndicator } from 'react-native'

import { SuperHeroCard } from '../../components/SuperHeroCard'

import api from '../../services/api'

import {
  Container
} from './styles'

export function SuperHeroMobile() {
  const [loading, setLoading] = useState(true)
  const [heros, setHeros] = useState([])

  function renderItem({ item }) {
    return <SuperHeroCard heroData={item} />
  }

  async function fetchHeros() {
    try {
      const response = await api.get('/all.json')
      setHeros(response.data)
      console.log('PASSOU AQUI')
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
    <Container>
      {/* {loading ?
        <ActivityIndicator
          color='blue'
          size='large'
          style={{ flex: 1 }}
        />
      : */}
        <FlatList
          data={heros}
          keyExtractor={item => String(item.id)}
          showsHorizontalScrollIndicator={true}
          renderItem={renderItem}
          horizontal={true}
          contentContainerStyle={{ marginHorizontal: 50 }}
        />
      {/* } */}
    </Container>
  )
}