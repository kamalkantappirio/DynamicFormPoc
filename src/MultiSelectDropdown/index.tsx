import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Card, Icon, Item} from 'native-base';
import CheckBoxGroup from '../checkbox/CheckBoxGroup';
var {height, width} = Dimensions.get('window');

interface Props {
  hideDropdownModal: Function;
  selectedItem: Function;
  item: {
    label: string;
    api_name: string;
    validation: [];
    Options: [];
    serviceCallName: any;
    isSingleSelect: boolean;
    dependentValue: string[];
    selectedValues: string[];
    input_type: string;
  };
}

interface State {}

export const MultiSelectDropdownComponent: React.SFC<Props> = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProcedure, setProcedure] = useState([]);

  const procedures = props.item;

  function selectItem() {
    console.log('selectedProcedure', selectedProcedure);
    props.selectedItem(selectedProcedure);
    setModalVisible(false);
  }

  function setSelectedProcedure(item: []) {
    console.log('procedure', item);
    setProcedure(item);
  }

  const renderDropdownList = () => {
    return (
      <CheckBoxGroup
        checkBoxData={procedures}
        setSelectedProcedure={setSelectedProcedure}
      />
    );
  };

  const _renderSelectedIcon = (item: any) => (
    <View style={[styles.selectedItem]} key={item.value}>
      <Text style={[styles.selectedItemText]} numberOfLines={1}>
        {item.label}
      </Text>
    </View>
  );

  const placeHolderView = (
    <Text style={styles.pickerLblText}>{procedures.label}</Text>
  );

  return (
    <View style={{flex: 1, flexDirection: 'row', paddingTop: 50}}>
      <TouchableOpacity
        style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}
        onPress={() => setModalVisible(!modalVisible)}>
        {procedures.selectedValues.length === 0
          ? placeHolderView
          : procedures.selectedValues &&
            procedures.selectedValues.map(singleSelectedItem =>
              _renderSelectedIcon(singleSelectedItem),
            )}
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingTop: 46,
            maxHeight: 40,
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.header}>
            <Icon
              type="Ionicons"
              name="arrow-dropleft"
              style={{paddingBottom: 5}}
            />
          </TouchableOpacity>
          <Text style={styles.headerLabel}> {procedures.label} </Text>
          <TouchableOpacity onPress={() => selectItem()} style={styles.header}>
            <Text style={styles.done}> Done </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          {renderDropdownList()}
          {/* <FlatList
            data={procedures.Options}
            renderItem={item => {
              return renderDropdownList(item);
            }}
            keyExtractor={(item, index) => `${index}`}
          /> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownItem: {
    height: 50,
    flexDirection: 'row',
    borderColor: '#00000019',
    borderWidth: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerLabel: {fontSize: 20, paddingBottom: 10},
  done: {color: 'black', fontSize: 20, paddingBottom: 10},

  selectedItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    width: '85%',
    flexDirection: 'row',
  },
  selectedItemText: {
    flex: 1,
    color: '#000000',
    fontSize: 16,
  },
  pickerLblText: {
    color: '#B2B4AE',
    fontSize: 16,
  },
});
