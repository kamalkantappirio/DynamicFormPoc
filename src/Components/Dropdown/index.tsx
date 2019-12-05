import React from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
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
  getSelectedValue: Function,
}

interface State {
  dropdownValue: null | string;
  modalVisible: boolean;
}

export default class Dropdown extends React.Component<Props, State> {

  state = {
    dropdownValue: null,        // selected dropdown value
    modalVisible: false,        // to render dropdown modal or not
  }

  componentDidMount() {
    if (this.props.formItem.options.length == 1) {      // no need to open modal, select by default option present
      this.setState({ dropdownValue: this.props.formItem.options[0].label });
      this.props.getSelectedValue(this.props.formItem.options[0].label, this.props.formItem)     // passing value to its parent
    }
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
    this.props.getSelectedValue(value, this.props.formItem)     // passing value to its parent
  }

  // show/hide dropdown modal
  showDropdownModal() {
    if (this.props.formItem.options.length > 1) {   // if more then one options are available, show modal
      this.setState({ modalVisible: !this.state.modalVisible })
    }
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
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.showDropdownModal()} />
        </View>

        <Modal visible={this.state.modalVisible} animationType="slide">
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

