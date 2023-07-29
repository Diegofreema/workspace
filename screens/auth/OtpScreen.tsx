import { Keyboard, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, HStack, Text, VStack, View } from 'native-base';
import {
  HeaderComponents,
  TextComponent,
} from '../../components/HeaderComponents';
import OtpComponent from '../../components/OtpComponent';
import { colors } from '../../constants/Colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Props = {};

const otpArray = new Array(5).fill('');

const OtpScreen = (props: Props) => {
  const [otp, setOtp] = useState([...otpArray]);
  const [activeOtp, setActiveOtp] = useState(0);
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const inputRef = useRef<TextInput>(null);
  const handleNavigation = () => {
    // @ts-ignore
    // navigation.navigate('');
    console.log(value);
  };

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    if (value === 'Backspace') {
      if (!newOtp[index]) setActiveOtp(index - 1);
      newOtp[index] = '';
    } else {
      setActiveOtp(index + 1);
      newOtp[index] = value;
    }

    setOtp([...newOtp]);
  };
  const handlePaste = (value: string) => {
    if (value.length === 5) {
      Keyboard.dismiss();
      const newOtp = value.split('');
      setOtp([...newOtp]);
    }
    //@ts-ignore
    navigation.navigate('user');
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtp]);
  return (
    <Box safeAreaX={5}>
      <HeaderComponents title="Enter OTP" mb={5} />
      <TextComponent
        text="Please enter the five digit pin sent to Your Email"
        color="#A7A7A7"
      />

      <HStack justifyContent={'center'} space={5}>
        {otpArray.map((_, i) => (
          <OtpComponent
            ref={activeOtp === i ? inputRef : null}
            // @ts-ignore
            onKeyPress={({ nativeEvent }) => {
              handleChange(nativeEvent.key, i);
            }}
            key={i}
            onChangeText={handlePaste}
            value={otp[i] || ''}
          />
        ))}
      </HStack>
      <VStack alignItems={'center'} mt={8}>
        <Text color={'black'}>Did't receive a code?</Text>
        <Button variant={'unstyled'} onPress={handleNavigation}>
          <Text color={colors.buttonColor}>Resend</Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
