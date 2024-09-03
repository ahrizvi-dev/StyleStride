import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Like = () => {
  return (
    <View>
      <Text style={styles.text}>Like</Text>
    </View>
  )
}

export default Like

const styles = StyleSheet.create({
    text: {
        color: '#000',
    },
})