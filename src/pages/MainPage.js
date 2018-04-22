import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, SocialIcon, PricingCard   } from 'react-native-elements';
import { Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
export default class MainPage extends React.Component {

  render() {
    return (
      
      <View >
        <Header style={styles.header}
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Glory', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView>
        <PricingCard
        color='#4f9deb'
        title='Free'
        price='$0'
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
      </ScrollView>
            </View>
          );
        }
      }

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
