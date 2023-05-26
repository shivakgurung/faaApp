import React from 'react'
import { View, Text } from 'react-native'

const Home = ({ route, navigation }) => {
    const {email} = route.params
  return (
      <View>
          <Text> Welcome to home page { email}</Text>
    </View>
  )
}

export default Home