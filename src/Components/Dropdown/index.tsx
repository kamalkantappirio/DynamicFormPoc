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
const { height, width } = Dimensions.get('window');


type formItem = {
  label: string,
  api_name: string,
  input_type: string,
  validation: { validation_msg_key: string, rule: string }[],
  options: { value: string, label: string }[],
  serviceCallName: null | string,
  isSingleSelect: boolean,
  dependentValue: null | string,
  selectedValues: string
};


interface Props {
  formItem: formItem;
}

interface State {
  dropdownValue: null | string;
  dropdownToRender: null | string;
  modalVisible: boolean;
}

export default class Dropdown extends React.Component<Props, State> {

  state = {
    dropdownToRender: null,     // which dropdown modal to render
    dropdownValue: null,        // selected dropdown value
    modalVisible: false,        // to render dropdown modal or not
  }

  // Modal - dropdown options list
  renderDropdownList(item: { value: string, label: string }) {
    return (
      <TouchableOpacity style={styles.dropDownItem} onPress={() => this.selectItem(item.label)} >
        <Text> {item.label} </Text>
      </TouchableOpacity>
    )
  }

  // selected dropdown item
  selectItem(value: string) {
    this.setState({ modalVisible: false, dropdownValue: value })
  }

  // show/hide dropdown modal and setting which dropdown modal to render
  showDropdownModal(formItem: formItem) {
    this.setState({ dropdownToRender: formItem.api_name, modalVisible: !this.state.modalVisible })
  }

  // know whether to show/hide dropdown modal
  visibleHideDropdownModal(formItem: formItem) {
    return (this.state.dropdownToRender == formItem.api_name && this.state.modalVisible) ? true : false;
  }

  render() {
    const { formItem } = this.props;
    return (
      <View style={styles.formItemsView} key={formItem.api_name}>
        <Text> {formItem.label} </Text>
        <View style={styles.textInputBorderView}>
          <Text style={styles.dropdownValue}>
            {this.state.dropdownValue}
          </Text>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.showDropdownModal(formItem)} />
        </View>

        <Modal visible={this.visibleHideDropdownModal(formItem)} animationType="slide">
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
            style={styles.header}>
            <View />
            <Text style={styles.headerLabel}> {formItem.label} </Text>
            <Text style={styles.done}> Done </Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <FlatList
              data={formItem.options}
              renderItem={(item) => {
                return this.renderDropdownList(item.item);
              }}
              keyExtractor={item => JSON.stringify(item.value)}
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
    height: (45 / 667) * height,
    width: (328 / 375) * width,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 1,
    borderColor: '#00000019',
    borderWidth: 1
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

