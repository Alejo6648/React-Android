import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const guardarDatos = async () => {
        if (correo == "" || contrasena == "") {
            alert('Error llene todos los campos');
        }else{
            await AsyncStorage.setItem('correo', correo);
            await AsyncStorage.setItem('contrasena', contrasena);

            alert('Datos guardados correctamente.');
            navigation.navigate( 'Login' )
        }};
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>
             <TextInput
                style={styles.input}
                placeholder="Ingrese su Correo"
                value={correo}
                onChangeText={(text) => setCorreo(text)}
            />
               <TextInput
                style={styles.input}
                placeholder="Ingrese su Contraseña"
                value={contrasena}
                secureTextEntry={true}
                onChangeText={(text) => setContrasena(text)}
            />
         
        

            <Pressable style={styles.button}  onPress={guardarDatos}>
          <Text style={styles.textoButton}>Registrarse</Text>
         </Pressable>

        </View>
    );
    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EEDEEC",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    },
    title:{
        textAlign:"center",
        fontSize:20,
        bottom:80
    },
    input: {
        height: 40,
        width:300,
        marginBottom: 30,
        borderWidth: 1,
        padding:10,    
        borderColor:"#A569BD"    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        padding:17,
        marginTop:15,
        backgroundColor: 'black'
    },
    textoButton:{
    color: "white",
    fontSize:19
    },
})

export default Register;