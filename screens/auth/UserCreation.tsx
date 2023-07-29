import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Box, Button, ScrollView } from 'native-base';
import {
  HeaderComponents,
  TextComponent,
} from '../../components/HeaderComponents';
import { colors } from '../../constants/Colors';
import InputComponent from '../../components/InputComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Props = {};

const UserCreation = (props: Props) => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const handleNavigation = () => {
    // @ts-ignore
    navigation.navigate('createPassword');
  };
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Box safeAreaX={5} flex={1}>
        <HeaderComponents title="Enter User Information" mb={3} />
        <TextComponent
          text="Please make sure your details is entered correctly"
          color={colors.textGray}
        />
        <Box flex={0.5}>
          <InputComponent
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
          />
          <InputComponent
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
          />
          <InputComponent
            placeholder="Date of birth"
            value={birth}
            setValue={setBirth}
          />
          <InputComponent
            placeholder="Gender"
            value={gender}
            setValue={setGender}
          />
        </Box>
        <Button onPress={handleNavigation} backgroundColor={colors.buttonColor}>
          Next
        </Button>
      </Box>
    </ScrollView>
  );
};

export default UserCreation;

const styles = StyleSheet.create({});
