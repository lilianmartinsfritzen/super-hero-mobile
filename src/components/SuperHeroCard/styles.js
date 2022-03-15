import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SuperHeroName = styled.Text`
  font-size: ${RFValue(30)}px;
  color: rgba(235, 141, 34, 0.7);

  margin-bottom: 10px;
`

export const SuperHeroImage = styled.Image`
  width: 320px;
  height: 480px;
  
  border-radius: 3px;
`

export const Powerstats = styled.View`
  width: 50%;
  padding: 5px;
  margin: 5px;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

`

export const Intelligence = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(14, 210, 240, 0.7);
  padding: 10px;
`

export const Strength = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(14, 210, 240, 0.7);
  padding: 10px;
`

export const Speed = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(14, 210, 240, 0.7);
  padding: 10px;
`

export const Durability = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(14, 210, 240, 0.7);
  padding: 10px;
`

export const Power = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(14, 210, 240, 0.7);
  padding: 10px;
`

export const Combat = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(14, 210, 240, 0.7);
  padding: 10px;
`
