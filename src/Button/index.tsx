import React, { useState } from "react";
import {
  Text,
  TouchableOpacity
} from 'react-native';
const Button = (props:any) => {
  const [buttonState] = useState(props);
  return (
    <TouchableOpacity style={buttonState.buttonStyle} onPress={buttonState.onClick}><Text style={buttonState.buttonTextStyle}>{buttonState.title}</Text></TouchableOpacity>
  );
};

export default Button;