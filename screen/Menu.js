import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Second from './second'
const menu = () => {
const a= "add"
  return (
    
    <View>
      <Text>menu</Text>
      <Second a={a}/>
    </View>
  )
}

export default menu

const styles = StyleSheet.create({})