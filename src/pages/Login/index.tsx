import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';
const imageStarteds = require('../../assets/starteds.jpg');

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput value="texto" />
        </View>
        <View style={styles.image}>
          <Image style={styles.images} source={imageStarteds} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
  },
  image: {},
  images: {
    width: 236,
    height: 166,
  },
});
