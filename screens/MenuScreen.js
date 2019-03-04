import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Animated,
} from 'react-native'

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.scrollY = new Animated.Value(0)
  }

  render() {
    const headerContainerWidth = this.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: ['90%', '100%'],
      extrapolate: 'clamp'
    })

    const imageContainerHeight = this.scrollY.interpolate({
      inputRange: [-200, 0],
      outputRange: [450, 250],
      extrapolate: 'extend'
    })

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.imageContainer, { height: imageContainerHeight }]}>
          <Image style={styles.image} source={{ uri: 'https://cdn.dribbble.com/users/1846841/screenshots/4961950/epi_x.png' }} />
        </Animated.View>
        <ScrollView onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY } } }])}
          scrollEventThrottle={16}
          stickyHeaderIndices={[1]}
          style={styles.scrollViewContainer}
        >
          <View style={styles.contentContainer}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
          </View>
          <View style={styles.stickyHeaderContainer}>
            <Animated.View style={[styles.headerContainer, { width: headerContainerWidth }]}></Animated.View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  scrollViewContainer: {
    flex: 1
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    backgroundColor: '#fff'
  },
  stickyHeaderContainer: {
    position: 'absolute',
    top: 125,
    left: 0,
    right: 0
  },
  headerContainer: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  contentContainer: {
    marginTop: 290,
    backgroundColor: '#eee'
  },
  image: {
    flex: 1
  },
  item: {
    margin: 10,
    backgroundColor: '#fff',
    height: 100
  }
})
