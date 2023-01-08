import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';

import firebase from './src/Firebase/firebaseConnection';
import AcessoView from './src/Acessar/acesso';
import CadastroView from './src/Cadastro/cadastro';

console.disableYellowBox = true;


export default function App(){
  const [acessoModal, setModalA] = useState(false);
  const [cadastroModal, setModalC] = useState(false);
  const [email, setEmail] = useState('fulano@teste.com');
  const [password, setPassword] = useState('123123');
  const [name, setName] = useState('');

  async function acessar(){
    await firebase.auth().signInWithEmailAndPassword(
      email, 
      password).then( () => {
        setModalA(true);
        //PRECISA ACESSAR O NOME PELO UID PARA EXIBIR NA TELA DE ACESSO
      })
      .catch( (error) => {
          alert('OPSS ALGO DEU ERRADO');
          return;
      })
  }

  async function cadastrar(){
    setModalC(true);
  }

  function botaoVoltar(){
    setModalA(false);
    setModalC(false);

    //setEmail('');
    //setPassword('');
  }


  return(

    <View style={styles.container}>
      
      <View style={styles.areaBemVindo}>
        <Text style={styles.textoBemVindo}>
          SEJA BEM VINDO
        </Text>
      </View>

      <View style={styles.areaLogin}>
        <Text style={styles.textoLogin}>
          Faça seu Login
        </Text>
      </View>

      <View style={styles.areaInput}>
        <TextInput
        style={styles.input}
        placeholder={'Login'}
        value={email}
        onChangeText={(email) => setEmail (email)}>
        </TextInput>
      </View>

      <View style={styles.areaInput}>
        <TextInput
        style={styles.input}
        placeholder={'Password'}
        keyboardType= 'numeric'
        value={password}
        onChangeText={(senha) => setPassword (senha)}>
        </TextInput>
      </View>


      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btnLogin}
        onPress={acessar}>
          <Text style={styles.textoBtn}>
            ACESSAR
            </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaLogin}>
        <TouchableOpacity
        onPress={cadastrar}>
          <Text style={styles.textoLogin}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>


      <Modal
        transparent={true} 
        animationType='slide' 
        visible={acessoModal}>
          <AcessoView
          voltar={botaoVoltar}
          nomeUser={name}
          />
      </Modal>



      <Modal
        transparent={true} 
        animationType='slide' 
        visible={cadastroModal}
        password={password}
        email={email}>
          <CadastroView
          voltar={botaoVoltar}
          />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
  },
  areaBemVindo: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
  },
  textoBemVindo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#006400',
    textShadowColor: '#000',
    textShadowRadius: 2,
  },
  areaLogin: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  textoLogin: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000',
  },
  areaInput: {
    marginTop: 8,
    marginHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    color: '#363636',
  },
  areaBtn: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  btnLogin:{
    backgroundColor: '#006400',
    height: 40,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textoBtn: {
    color: '#FFF',
    fontSize: 18,
  },
})