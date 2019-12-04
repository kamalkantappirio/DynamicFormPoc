import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Card } from 'native-base';
var { height, width } = Dimensions.get('window');


type formItems = {
  id: number,
  type: string;
  label: string;
  options: { id: number, value: string }[];
  apiFormItem: string;
  value: string,
};


interface Props {
  formItem: formItems;
  // hideDropdownModal: Function;
  // selectedItem: Function;
  // visible: boolean
}

interface State {
  dropdownValue: null | string;
  dropdownToRender: null | string;
  modalVisible: boolean;
}

export default class Dropdown extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dropdownToRender: null,     // which dropdown modal to render
      dropdownValue: null,        // selected dropdown value
      modalVisible: false,        // to render dropdown modal or not
    }
  }

  // Modal - dropdown options list
  renderDropdownList(item: any) {
    return (
      <TouchableOpacity style={styles.dropDownItem} onPress={() => this.selectItem(item.item.value)} >
        <Text> {item.item.value} </Text>
      </TouchableOpacity>
    )
  }

  // selected dropdown item
  selectItem(value: any) {
    this.setState({ modalVisible: false, dropdownValue: value })
  }

  // show/hide dropdown modal and which dropdown modal to render
  showDropdownModal(formItem: formItems) {
    this.setState({ dropdownToRender: formItem.apiFormItem, modalVisible: !this.state.modalVisible })
  }

  render() {
    return (
      <View style={styles.formItemsView} key={this.props.formItem.id}>
        <Text> {this.props.formItem.label} </Text>
        <Card style={styles.textInputBorderView}>
          <Text style={styles.dropdownValue}>
            {this.state.dropdownValue}
          </Text>
          <TouchableOpacity style={{ flex: 1 }}
            onPress={() => this.showDropdownModal(this.props.formItem)}
          />
        </Card>

        <Modal visible={(this.state.dropdownToRender == this.props.formItem.apiFormItem && this.state.modalVisible) ? true : false} animationType="slide">
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
            style={styles.header}>
            
            <Text style={styles.headerLabel}> {this.props.formItem.label} </Text>
            <Text style={styles.done}> Done </Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.props.formItem.options}
              renderItem={(item) => {
                return this.renderDropdownList(item);
              }}
              keyExtractor={item => JSON.stringify(item.id)}
            />
          </View>
        </Modal>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  formItemsView: { height: 100, justifyContent: 'center', paddingLeft: 10 },
  textInputBorderView: {
    height: (55 / 667) * height,
    width: (328 / 375) * width,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 1,
    borderColor: '#00000019',
  },
  dropDownItem: {
    height: 50,
    flexDirection: 'row',
    borderColor: '#00000019',
    borderWidth: 1,
    alignItems: 'center'
  },
  dropdownValue: { alignSelf: 'center', fontSize: 15, color: 'grey', paddingLeft: 10 },
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

