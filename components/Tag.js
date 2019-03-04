import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Tag = (props) => <Text style={styles.container} {...props} />

export default Tag

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    marginTop: 10,
    marginRight: 10,
    padding: 5
  }
})
