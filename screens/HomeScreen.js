import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Card from '../components/Card'
import CardList from '../components/CardList'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={{ paddingTop: 10 }}>
            <CardList title={'Tus Favoritos'}>
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
            </CardList>
            <CardList title={'Comida Italiana Favorita'}>
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
            </CardList>
            <CardList title={'Tus Pizzas Favoritas'}>
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
            </CardList>
            <CardList title={'Tus Tacos Favoritos'}>
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
              <Card style={styles.card} />
            </CardList>
          </View>
        </ScrollView>
        <View style={styles.headerContainer}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: 100,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  card: {
    marginRight: 10
  }
})
