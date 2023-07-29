import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Box, Button, Icon, View } from 'native-base';
import { Feather } from '@expo/vector-icons';

import {
  HeaderComponents,
  TextComponent,
} from '../../components/HeaderComponents';
import { colors } from '../../constants/Colors';
import InputComponent from '../../components/InputComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Props = {};

const CreatePassword = (props: Props) => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const handleNavigation = () => {
    // @ts-ignore
    navigation.navigate('intro');
  };
  return (
    <Box safeAreaX={4}>
      <HeaderComponents title="Create password" mb={3} />
      <TextComponent
        text="Enter a strong password text, numbers and characters is recommended for a strong password"
        color={colors.textGray}
      />

      <View mt={4}>
        <InputComponent
          value={password}
          setValue={setPassword}
          placeholder="Password"
          rightElement={
            <Icon
              as={Feather}
              name={secure ? 'eye-off' : 'eye'}
              mr={4}
              onPress={() => setSecure((prev) => !prev)}
            />
          }
          secureTextEntry={secure}
        />
        <InputComponent
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm Password"
          rightElement={
            <Icon
              as={Feather}
              name={secureConfirm ? 'eye-off' : 'eye'}
              mr={4}
              onPress={() => setSecureConfirm((prev) => !prev)}
            />
          }
          secureTextEntry={secureConfirm}
        />
      </View>
      <Button
        onPress={handleNavigation}
        mt={4}
        backgroundColor={colors.buttonColor}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({});
