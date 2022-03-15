import React from 'react'

import {
  Container,
  SuperHeroName,
  SuperHeroImage,
  Powerstats,
  Intelligence,
  Strength,
  Speed,
  Durability,
  Power,
  Combat,  
} from './styles'

export function SuperHeroCard(props) {

  return (
    <Container>
      <SuperHeroName>{props.heroData.name}</SuperHeroName>
      <SuperHeroImage 
        source={{ uri: props.heroData.images.md }} 
        resizeMode='contain'
      />

      <Powerstats>
        <Intelligence>{props.heroData.powerstats.intelligence} inteligencia</Intelligence>
        <Strength>{props.heroData.powerstats.strength} força</Strength>
        <Speed>{props.heroData.powerstats.speed} velocidade</Speed>
        <Durability>{props.heroData.powerstats.durability} durabilidade</Durability>
        <Power>{props.heroData.powerstats.power} poder</Power>
        <Combat>{props.heroData.powerstats.combat} luta</Combat> 
      </Powerstats>

    </Container>
  )
}