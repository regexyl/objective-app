import * as React from "react";
import { Switch } from "react-native-paper";

interface SwitchButtonProps {
  isSwitchOn: boolean;
  onValueChange: () => {};
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  isSwitchOn,
  onValueChange,
}: SwitchButtonProps) => {
  return <Switch value={isSwitchOn} onValueChange={onValueChange} />;
};

export default SwitchButton;
