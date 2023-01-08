import React, {useState} from 'react';
import {
    Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AcessoView(props){

    return(
        <View style={styles.container}>
            
            <View style={styles.areaBemVindo}>
                <Text style={styles.textoBemVindo}>
                    Bem Vindo
                </Text>
                <Text style={styles.textoNomeUser}>
                    {(props.nomeUser)}
                </Text> 
            </View>


            <View>
                <Text>
                    TESTE DE AREA DE ACESSO
                </Text>
            </View>


            <View style={styles.areaVoltar}>
                <TouchableOpacity
                style={styles.btnVoltar}
                onPress={props.voltar}>
                    <Text style={styles.textoVoltar}>
                        Sair
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
    areaBemVindo: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    textoBemVindo: {
        fontSize: 20,
        color: '#323232',

    },
    textoNomeUser:{
        fontSize: 18,
        color: '#006400',
    },
    areaVoltar:{
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    btnVoltar: {
        backgroundColor: 'grey',
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoVoltar: {
        color: '#FFF',
        fontSize: 18,
    },
});