import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../screens/RootStackPrams';
type authScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
export var width = Dimensions.get('window').width;
const imageStarted = require('../../assets/started.jpg');

const GetStarted = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.images} source={imageStarted} />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>Seja bem vind ao nosso app</Text>
        <Text style={styles.subTitle}>
          Conhecça todas as ferramentas que disponibilizamos para você, clique
          no botão abaixo e começe agora mesmo
        </Text>
      </View>
      <View style={styles.botton}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  text: {
    color: 'grey',
  },
  images: {
    width: 246,
    height: 200,
  },
  image: {},
  description: {
    alignItems: 'center',
  },
  botton: {
    position: 'absolute',
    bottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    marginTop: 25,
    textAlign: 'center',
  },
  btn: {
    width: width - 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#d26acc',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#d26acc',
  },
});

export default GetStarted;
