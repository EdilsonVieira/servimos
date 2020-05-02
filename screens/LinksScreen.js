import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

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
      <Text style={styles.itemText}>Tipo: {data.item.tipo}</Text>
      <Text style={styles.itemText}>Desc.:{data.item.desc}</Text>
      <Text style={styles.itemText}>Contato: {data.item.contato}</Text>
      <Text style={styles.itemText}>Telefone: {data.item.telefone}</Text>
      <Text style={styles.itemText}>Data: {data.item.data}</Text>
      <Text style={styles.itemText}>Técnico: {data.item.tecnico}</Text>
    </TouchableOpacity>
  );
}

export default function LinksScreen () {
  const [items, setItems] = React.useState(null);

  return (
    <View>
      <FlatList
        data= {dataSource}
        ItemSeparatorComponent = {FlatListItemSeparator}
        renderItem= {item=> renderItem(item)}
        keyExtractor= {item=>item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 11,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: 'azure',
    padding: 10
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
  inLine: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 11,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    width: 400,
  },
  contentContainer: {
    paddingTop: 5,
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
  {"id":"7", "tipo": "Hidráulica", "desc": "Instalação de duas torneiras.", "contato": "Fernando", "telefone": "21995485303", "data": "29/04/2020", "tecnico": ""}, 
  {"id":"6", "tipo": "Alvenaria", "desc": "Acabamento do muro da casa.", "contato": "José", "telefone": "21995765305", "data": "28/04/2020", "tecnico": ""}, 
  {"id":"5", "tipo": "Elétrica", "desc": "Instalação de novo relógio.", "contato": "D. Maria", "telefone": "21995783306", "data": "26/04/2020", "tecnico": ""}, 
  {"id":"4", "tipo": "Hidráulica", "desc": "Desentupimento de sistema de esgoto e instalação de uma fossa.", "contato": "Cláudio", "telefone": "21995785301", "data": "25/04/2020", "tecnico": ""}, 
  {"id":"3", "tipo": "Alvenaria", "desc": "Colocação de portão de entrada.", "contato": "Roberto", "telefone": "21998435230", "data": "24/04/2020", "tecnico": ""}, 
  {"id":"2", "tipo": "Hidráulica", "desc": "Instalação hidráulica da caixa d'água.", "contato": "Seu Paulo", "telefone": "2193456663", "data": "22/04/2020", "tecnico": ""}, 
  {"id":"1", "tipo": "Elétrica", "desc": "Troca do sistema elétrico da casa com novas tomadas.", "contato": "D. Luiza", "telefone": "21998738233", "data": "19/04/2020", "tecnico": ""}
]

