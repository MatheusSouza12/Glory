import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label, Picker} from 'native-base';



export default class CadastroUsuario extends React.Component{
    render(){
        return (
            <Container style={styles.container}>
                <Form>
                <Item floatingLabel>
                    <Label> Nome </Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        //onChangeText={(email) => this.setState({ email })}
                    />
                </Item>
                <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        //selectedValue={this.state.selected1}
                        //onValueChange={this.onValueChange.bind(this)}
                >
                        <Picker.Item label="Sexo" value="key01" />
                        <Picker.Item label="Masculino" value="key0" />
                        <Picker.Item label="Feminino" value="key1" />
                        <Picker.Item label="Outros" value="key2" />

                </Picker>
                <Item floatingLabel>
                    <Label> Sexo </Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        //onChangeText={(email) => this.setState({ email })}
                    />
                </Item>
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
                </Form>

                <Button style={{ marginTop: 10 }}
                         full 
                         primary
                         onPress={() => this.signUpUser(this.state.email, this.state.senha)}
                    >
                    <Text style={{ color: 'white'}}> Cadastre-se </Text>
                  </Button>
            </Container>
                )
            }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    }
})