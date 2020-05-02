import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';

function OptionList (props) {

    const [selected, setSelected] = React.useState(new Map());
  
    const onSelect = React.useCallback(
      id => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
  
        setSelected(newSelected);
      },
      [selected],
    );
  
    function Item({ id, title, selected, onSelect }) {
      return (
        <TouchableOpacity
          onPress={() => onSelect(id)}
          style={[
            styles.item,
            { backgroundColor: selected ? 'darkblue' : 'lightblue' },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      );
    }
  
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.ItemList}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selected}
        />
      </SafeAreaView>
    );
  
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'darkblue',
        width: "100%",
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 13,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
});
  
export default OptionList; 
