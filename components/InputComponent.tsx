import { StyleSheet, KeyboardTypeOptions } from 'react-native';
import React from 'react';
import { Input } from 'native-base';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  rightElement?: JSX.Element;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
};

const InputComponent = ({
  value,
  setValue,
  placeholder,
  rightElement,
  secureTextEntry,
  keyboardType,
}: Props) => {
  return (
    <Input
      placeholder={placeholder}
      w="100%"
      value={value}
      onChangeText={setValue}
      mb={4}
      rightElement={rightElement}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      fontSize={15}
    />
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
