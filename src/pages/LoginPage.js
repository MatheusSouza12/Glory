import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';
import { SocialIcon } from 'react-native-elements';

var firebaseConfig = {
    apiKey: "AIzaSyDLnRxbX4kJQvB4oyY5sM-A3P2L25xCttg",
    authDomain: "glory-b593d.firebaseapp.com",
    databaseURL: "https://glory-b593d.firebaseio.com",
    projectId: "glory-b593d",
    storageBucket: "",
    messagingSenderId: "121424033157"
  };

  firebase.initializeApp(firebaseConfig);




export default class LoginPage extends React.Component {
    constructor(props){
        const { navigateToMenuPage, onPress } = props;
        super(props) 
    
        this.state = ({
          email: '',
          senha: ''
        })
      }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null){
                console.log(user)
            }
        })
    }

    signUpUser = (email, senha) =>{
      try{
        if(this.state.senha.length<6)
        {
          alert("Preencha uma senha com no mínimo 6 caracteres")
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha)
    }
        catch(error){
            console.log(console.error.toString());
            
        }
      }
  
    loginUser = (email, senha) =>{
      try{
        firebase.auth().signInWithEmailAndPassword(email, senha).then(function (user) {
            //navigation.navigate('MainPage')
            
  
        })
      }
      catch(error){

        console.log(error.toString())
      }
    }
  
    async loginWithFacebook(){
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
        ('133663110819534', { permission: ['public_profile']})
        if (type =='success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token)
  
            firebase.auth().signInWithCredential(credential).catch( (error) => {
                console.log(error)
            })
        }
     }



    render(){
        return(
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label> Email </Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label> Senha </Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(senha) => this.setState({ senha })}
                        />
                    </Item>

                    <Button style={{ marginTop: 10 }} 
                        full 
                        success
                        onPress={() => this.loginUser(this.state.email, this.state.senha)}
                    >
                        <Text style={{ color: 'white'}}> Login </Text>
                  </Button>
                  
                  <Button style={{ marginTop: 10 }}
                         full 
                         primary
                         onPress={() => this.props.navigation.navigate('Cadastro')}
                    >
                    <Text style={{ color: 'white'}}> Cadastre-se </Text>
                  </Button>
                  <SocialIcon
                            title='Sign In With Facebook'
                            button
                            type='facebook'
                            onPress={() => this.props.navigation.navigate('MainPage')}
                    />
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    }
})




