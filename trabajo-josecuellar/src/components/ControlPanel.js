import { View, Text, ScrollView, Image, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store'


const ControlPanel = ({ navigation }) => {

    const[unidadesSamsung, setUnidadesSamsung] = useState('0')
    const[unidadesHuawei, setUnidadesHuawei] = useState('0')
    const[unidadesMotorola, setUnidadesMotorola] = useState('0')

    const Total = async () => {

        try {

            if(unidadesSamsung !== '0' || unidadesHuawei !== '0' || unidadesMotorola !== '0'){
                if(unidadesSamsung > 10){
                    let multiSam = parseInt(unidadesSamsung) * 600000
                    let descuento = parseInt(unidadesSamsung) * 600000 * 5 / 100
                    let totalSamsung = parseInt(multiSam) - parseInt(descuento)

                    await SecureStore.setItemAsync("totalSamsung", totalSamsung.toString())
                }else{
                    let totalSamsung = parseInt(unidadesSamsung) * 600000
                    await SecureStore.setItemAsync("totalSamsung", totalSamsung.toString())
                }

                if(unidadesHuawei > 10){
                    let multiHuawei = parseInt(unidadesHuawei) * 400000
                    let descuento = parseInt(unidadesHuawei) * 600000 * 5 / 100
                    let totalHuawei = parseInt(multiHuawei) - parseInt(descuento)

                    await SecureStore.setItemAsync("totalHuawei", totalHuawei.toString())
                }else{
                    let totalHuawei = parseInt(unidadesHuawei) * 400000
                    await SecureStore.setItemAsync("totalHuawei", totalHuawei.toString())
                }

                if(unidadesMotorola > 10){
                    let multiMoto = parseInt(unidadesMotorola) * 500000
                    let descuento = parseInt(unidadesMotorola) * 600000 * 5 / 100
                    let totalMotorola = parseInt(multiMoto) - parseInt(descuento)

                    await SecureStore.setItemAsync("totalMotorola", totalMotorola.toString())
                    
                }else{
                    let totalMotorola = parseInt(unidadesMotorola) * 500000;
                    await SecureStore.setItemAsync("totalMotorola", totalMotorola.toString())
                }

                if(unidadesSamsung > unidadesHuawei && unidadesSamsung > unidadesMotorola){
                    await SecureStore.setItemAsync("masVendido", "samsung")
                }else if(unidadesHuawei > unidadesSamsung && unidadesHuawei > unidadesMotorola){
                    await SecureStore.setItemAsync("masVendido", "huawei")
                }else{
                    await SecureStore.setItemAsync("masVendido", "motorola")
                }
                
                if(unidadesSamsung == unidadesHuawei && unidadesSamsung > unidadesMotorola){
                    await SecureStore.setItemAsync("masVendido", "Samsung y Huawei")
                }else if(unidadesSamsung == unidadesMotorola && unidadesSamsung > unidadesHuawei){
                    await SecureStore.setItemAsync("masVendido","Samsung y Motorola")
                }else if(unidadesHuawei == unidadesMotorola && unidadesHuawei > unidadesSamsung){
                    await SecureStore.setItemAsync("masVendido", "Huawei y Motorola")
                }else if(unidadesSamsung == unidadesHuawei && unidadesSamsung == unidadesMotorola){
                    await SecureStore.setItemAsync("masVendido", "Igual de unidades vendidas")
                }

                await SecureStore.setItemAsync('unidadesSamsung', unidadesSamsung.toString())
                await SecureStore.setItemAsync('unidadesHuawei', unidadesHuawei.toString())
                await SecureStore.setItemAsync('unidadesMotorola', unidadesMotorola.toString())
                    
                alert('Venta realizada con exito')
                navigation.navigate('Factura')
            }else{
                alert('No hay ventas por realizar,revise el contenido')
            }

            }

        catch (error) {
            alert('Error de venta' + error)
        }

    }

  return (
    <View style={styles.container} >
        <ScrollView>
            <Text style={styles.title}>Bienvenido: </Text>
            <View style={styles.containerImage}>
                <Text style={styles.title2}> Samsung </Text>
                <Image style={styles.image} source={samsung} />
                <Text style={styles.title2}> Precio: $600.000 </Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ingrese la cantidad'
                    keyboardType='numeric'
                    value={unidadesSamsung.toString()}
                    onChangeText={texto => {
                        const contar = texto ? parseInt(texto, 10) : 0
                        setUnidadesSamsung(contar)}}
                />
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.title2}> Huawei </Text>
                <Image style={styles.image} source={huawei} />
                <Text style={styles.title2}> Precio: $400.000 </Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ingrese la cantidad'
                    keyboardType='numeric'
                    value={unidadesHuawei.toString()}
                    onChangeText={texto => {
                        const contar = texto ? parseInt(texto, 10 ) : 0
                        setUnidadesHuawei(contar)}}
                />
            </View>
            <View style={styles.containerImage}>
                <Text style={styles.title2}> Motorola </Text>
                <Image style={styles.image} source={motorola} />
                <Text style={styles.title2}> Precio: $500.000 </Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ingrese la cantidad'
                    keyboardType='numeric'
                    value={unidadesMotorola.toString()}
                    onChangeText={texto => {
                        const contar = texto ? parseInt(texto, 10) : 0
                        setUnidadesMotorola(contar)}}
                />
            </View>
    
            <Pressable style={styles.button1}  onPress={Total}>
          <Text style={styles.textoButton}>Realizar Compra</Text>
         </Pressable>

            
            <Pressable style={styles.button1}  onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.textoButton}>Cerrar Sesión</Text>
         </Pressable>
         
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent:"center",
        backgroundColor:"#E8DAEF"
    },
    title: {
        fontSize: 30,
        textAlign:"center"
    },
    title2: {
        fontSize: 20,
        textAlign:"center"
    },
    image: {
        width: 200,
        height: 200,
        flex: 1,
        justifyContent: 'center'
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width:"40%",
        marginTop:15,
        backgroundColor: 'black'
    },
    textoButton:{
      color: "white",
      fontSize:19
    },
    input: {
        height: 40,
        width:300,
        marginBottom: 30,
        borderWidth: 1,
        padding:10
    }
})
export default ControlPanel