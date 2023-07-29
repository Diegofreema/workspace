import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  HeaderComponents,
  TextComponent,
} from '../../components/HeaderComponents';
import { generateStyles } from '../../constants/Styles';
import InputComponent from '../../components/InputComponent';
import { Box, Button } from 'native-base';
import { colors } from '../../constants/Colors';

const SignUp = () => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const handleNavigation = () => {
    // @ts-ignore
    navigation.navigate('otp');
  };
  const [value, setValue] = useState('');
  return (
    <View style={generateStyles.container}>
      <HeaderComponents title="Create account" mb={3} />
      <TextComponent
        text="Enter a valid email address either company email or personal
        email to create an account"
        color="#A7A7A7"
      />
      <InputComponent
        placeholder="e.g Example@gmail.com"
        value={value}
        setValue={setValue}
        keyboardType="email-address"
      />
      <Box mt={20}>
        <Button
          onPress={handleNavigation}
          style={{ backgroundColor: colors.buttonColor }}
        >
          Next
        </Button>
      </Box>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
