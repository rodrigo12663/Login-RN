import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../screens/RootStackPrams';
type authScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;
import {Input} from 'react-native-elements';
const logoUser = require('../../assets/logo.png');
export var width = Dimensions.get('window').width;

const Login = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.images} source={logoUser} />
      </View>

      <View style={styles.header}>
        <Text>Email</Text>
        <Input placeholder="EMAIL" />
      </View>
      <View style={styles.header}>
        <Text>Password</Text>
        <Input placeholder="Password" />
      </View>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btntextLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
  },
  image: {},
  images: {
    width: 130,
    height: 130,
    marginTop: 40,
  },
  btnLogin: {
    width: width - 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#d26acc',
  },
  btntextLogin: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#d26acc',
  },

  header: {
    width: width - 50,
  },
});

export default Login;
