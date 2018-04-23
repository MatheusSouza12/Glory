import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, SocialIcon, PricingCard   } from 'react-native-elements';
import { Button } from 'native-base';
import { DrawerNavigator  } from 'react-navigation';
import LoginPage from './LoginPage';
//import MainPage from './MainPage';
export default class MainPage extends React.Component {

  render() {
    return (
      
      <View >
        <Header style={styles.header}
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Glory', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <MyApp />
            </View>
          );
        }
      }

const MyApp = DrawerNavigator({
        Login: {
          screen: LoginPage
        }
      })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'black'
  }
});
