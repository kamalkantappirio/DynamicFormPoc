import React, { useState } from "react";
import {
  Text,
  TouchableOpacity
} from 'react-native';

interface Props {
  title: string;
  buttonStyle: any;
  buttonTextStyle: any;
  onClick(): any;
}

const Button = (props:Props) => {
  const [buttonState] = useState(props);
  return (
    <TouchableOpacity style={buttonState.buttonStyle} onPress={buttonState.onClick}><Text style={buttonState.buttonTextStyle}>{buttonState.title}</Text></TouchableOpacity>
  );
};

export default Button;