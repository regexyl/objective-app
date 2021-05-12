import * as React from 'react';
import { Switch } from 'react-native-paper';

const SwitchButton = (props: any) => {

  return <Switch style={props.style} value={props.value} onValueChange={props.onValueChange} />;
};

export default SwitchButton;