import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    height: 40,
    backgroundColor: '#FFF',
  },
  input: {
    paddingLeft: 12,

    fontSize: 14,
    color: 'rgb(168, 37, 69)',
    top: 0,
    height: 40,
  },
  error: {
    fontSize: 12,

    color: 'red',
    paddingRight: 16,
  },
});

export default styles;
