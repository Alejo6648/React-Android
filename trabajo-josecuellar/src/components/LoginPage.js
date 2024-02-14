import {  StyleSheet, Text, TextInput, View, Button,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [storedCorreo, setStoredCorreo] = useState("");
    const [storedcontrasena, setStoredcontrasena] = useState("");

    const [Correo, setInCorreo] = useState("");
    const [contrasena, setIncontrasena] = useState("");

    useEffect(() => {
        const recuperarDatos = async () => {
            const storedCorreo = await AsyncStorage.getItem("correo");
            const storedcontrasena = await AsyncStorage.getItem("contrasena");
            setStoredCorreo(storedCorreo);
            setStoredcontrasena(storedcontrasena);
        };
        recuperarDatos();
    }, []);
    
    const validarDatos = async () => {
        if (Correo == "" || contrasena == "") {
            alert('Error llene todos los campos');
        } else if (Correo == storedCorreo || contrasena == storedcontrasena) {
            setInCorreo("")
            setIncontrasena("")
            navigation.navigate('HomeScreen');
            alert("Bienvenido A Mi venta de celulares ")
        }
    };
return (
<View style={styles.container}>
    <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput style={styles.input}
        placeholder="Correo"
        value={Correo}
        onChangeText={(Text) => setInCorreo(Text)}
        />
        <TextInput style={styles.input}
        placeholder='Contrasena'
        value={contrasena}
        secureTextEntry={true}
        onChangeText={(Text) => setIncontrasena(Text)}
        />
        <Pressable style={styles.button}  onPress={validarDatos}>
        <Text style={styles.textoButton}>Inicio</Text>
        </Pressable>
                    
        <Pressable  style={styles.button} onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.textoButton}>Registro</Text>
        </Pressable>
</View>
    )};

const styles = StyleSheet.create({
container: {
    padding: 20,
    textAlign: "center",
    justifyContent: "justify",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#E8DAEF",
    height:"100%"
},
title: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    marginBottom: 50,
    color: "#000",
},
input: {
    height: 40,
    width:300,
    marginBottom: 30,
    borderWidth: 1,
    padding:10,
    borderColor:"#A569BD"
},
button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    padding:17,
    marginTop:15,
    backgroundColor: 'black',
},
textoButton:{
    color: "white",
    fontSize:19
},
imagen: {
    width: 100, 
    height: 100,
    resizeMode:"cover",
    marginBottom:50,
}
});