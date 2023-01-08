import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';

import firebase from '../Firebase/firebaseConnection';
import AcessoView from '../Acessar/acesso';

export default function CadastroView(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function cadastrar(){
        await firebase.auth().createUserWithEmailAndPassword(
          email, 
          password).then( (value) => {
            firebase.database().ref('usuarios').child(value.user.uid).set({
                nome: name
            })
            alert('Cadastro Realizado com Sucesso!')
            return;
          })
          .catch( (error) => {
            if(error.code === 'auth/weak-password'){
              alert('Obedeça os parâmetros de senha.');
              return;
            }
            if(error.code === 'auth/invalid-email'){
              alert('Email Inválido');
              return;
            }
            else{
              alert('OPSS ALGO DEU ERRADO');
              return;
            }
          })
        
        props.voltar();
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.areaTopo}>
                <Text style={styles.textoTopo}>
                FAÇA SEU CADASTRO ABAIXO
                </Text>
            </View>


            <View style={styles.areaInput}>
                <TextInput
                style={styles.input}
                placeholder={'Informe seu nome'}
                value={name}
                onChangeText={(nome) => setName (nome)}>
                </TextInput>
            </View>

           <View style={styles.areaInput}>
                <TextInput
                style={styles.input}
                placeholder={'E-mail. Ex: teste@teste.com'}
                value={email}
                onChangeText={(email) => setEmail (email)}>
                </TextInput>
            </View>

            <View style={styles.areaInput}>
                <TextInput
                style={styles.input}
                placeholder={'Senha. Mínimo 6 dígitos'}
                value={password}
                keyboardType='numeric'
                onChangeText={(senha) => setPassword (senha)}>
                </TextInput>
            </View>

            <View style={styles.areaCadastro}>
                <TouchableOpacity
                style={styles.btnCadastro}
                onPress={cadastrar}>
                <Text style={styles.textoBtnCad}>
                    Cadastrar
                </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaVoltar}>
                <TouchableOpacity
                style={styles.btnVoltar}
                onPress={props.voltar}>
                    <Text style={styles.textoVoltar}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#90EE90',
    },
    areaTopo:{
        alignItems: 'center',
        marginVertical: 25,
    },
    textoTopo:{
        color: '#006400',
        fontSize: 20,
        fontWeight: 'bold',
    },
    areaInput: {
        marginTop: 15,
        marginHorizontal: 30,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
    },
    input: {
        fontSize: 14,
        color: '#363636',
    },
    areaCadastro:{
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    btnCadastro: {
        backgroundColor: '#006400',
        height: 40,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textoBtnCad: {
        color: '#FFF',
        fontSize: 18,
    },
    areaVoltar:{
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    btnVoltar: {
        backgroundColor: 'grey',
        height: 40,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textoVoltar: {
        color: '#FFF',
        fontSize: 18,
    },

});