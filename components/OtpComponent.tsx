import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import React, { FC, forwardRef } from 'react';
import { Input } from 'native-base';

type Props = {
  ref: any;
};

const OtpComponent = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <Input
      {...props}
      //@ts-ignore
      ref={ref}
      w={10}
      h={10}
      borderWidth={0}
      variant={'unstyled'}
      style={styles.otp}
      keyboardType="numeric"
    />
  );
});

export default OtpComponent;

const styles = StyleSheet.create({
  otp: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,

    textAlign: 'center',
  },
});
