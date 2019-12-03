import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Card, Icon, Item } from 'native-base';
var { height, width } = Dimensions.get('window');


interface Props {
  label: string;
  options: {id: number, value: string}[];
  hideDropdownModal: Function;
  selectedItem: Function;
  visible: boolean
}

interface State { }

class DropdownComponent extends React.Component<Props, State> {

  selectItem(item: string) {
    this.props.selectedItem(item)
    this.props.hideDropdownModal()
  } 

  renderDropdownList(item: any) {
    return (
      <TouchableOpacity style={styles.dropDownItem} onPress={() => this.selectItem(item.item)}>
        <Text> {item.item.value} </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <TouchableOpacity
          onPress={() => this.props.hideDropdownModal()}
          style={styles.header}>
          <Icon type={'AntDesign'} name={'arrowleft'} style={{ paddingBottom: 5 }} />
          <Text style={styles.headerLabel}> {this.props.label} </Text>
          <Text style={styles.done}> Done </Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.options}
            renderItem={(item) => {
              return this.renderDropdownList(item);
            }}
            keyExtractor={item => JSON.stringify(item.id)}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  dropDownItem: {
    height: 50,
    flexDirection: 'row',
    borderColor: '#00000019',
    borderWidth: 1,
    alignItems: 'center'
  },
  header: {
    flex: 0.1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  headerLabel: { fontSize: 20, paddingBottom: 10 },
  done: { color: 'black', fontSize: 20, paddingBottom: 10 },
});

export { DropdownComponent };
