import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

function FlatListItemSeparator () {
  return (
    <View style={{
        height: .5,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
       }}
    />
  );
}

function renderItem (data) {
  return (
    <TouchableOpacity style={styles.itemList}>
      <Text style={styles.itemText}>Nome: {data.item.nome}</Text>
      <Text style={styles.itemText}>Especialidades: {data.item.espec}</Text>
    </TouchableOpacity>
  );
}

export default function AdminTecnicos({navigation}) {
  navigation.setOptions({ headerTitle: "Cadastro de Técnicos" });
  return (
    <View>
      <FlatList
        data= {dataSource}
        ItemSeparatorComponent = {FlatListItemSeparator}
        renderItem= {item=> renderItem(item)}
        keyExtractor= {item=>item.id.toString()}
      />
      <ScrollView>
        <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Nome:</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.labelText}>Especialidades:</Text>
            <TextInput style={styles.textInput} />
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress = {() => Alert.alert('Um novo técnico foi cadastrado!')} >
            <TabBarIcon focused={true} name="ios-add-circle-outline" />
            </TouchableOpacity>          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
      addContainer: {
        flex: 1,
        flexDirection: 'column', 
        borderWidth:2,
        borderColor:'blueviolet',
        alignItems:'center',
        backgroundColor:'lightblue',
      },
      inputContainer: {
        flex: 1,
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
      },
      labelText: {
        fontSize: 12,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
      },
      textInput: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
      },
      buttonsContainer: {
        flex: 1,
        alignItems:'center',
        width: '100%',
        padding: 5,
        marginTop: 10,
      },
      button: {
        borderWidth:2,
        borderColor:'blueviolet',
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
        backgroundColor:'lightblue',
        borderRadius:40,
      },
      itemList:{
      paddingVertical: 4,
      margin: 5,
      backgroundColor: "lightblue",
      borderRadius:20,
    },
    itemText: {
      fontSize: 12,
      marginLeft: 10,
      marginRight: 10,
    },
    container: {
        flex: 1,
        marginTop: 5,
        marginHorizontal: 4,
        marginBottom: 10,
        backgroundColor: '#fff',
      },
    contentContainer: {
      paddingTop: 15,
    },
    optionIconContainer: {
      marginRight: 12,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
  });
  
const dataSource = [
  {"id":"3", "nome": "Alberto", "espec": "Hidráulica"}, 
  {"id":"2", "nome": "Batista", "espec": "Alvenaria"}, 
  {"id":"1", "nome": "João", "espec": "Elétrica"}, 
]
