import React, { useState } from 'react';
import { Box, Button, HStack, Icon, Pressable, Text } from 'native-base';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  HeaderComponents,
  TextComponent,
} from '../../components/HeaderComponents';
import InputComponent from '../../components/InputComponent';
import { colors } from '../../constants/Colors';

const Login = () => {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const switchScreens = () => {
    // @ts-ignore
    navigation.navigate('signUp');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderComponents title="Welcome, Login to continue" w="2/3" mb={2} />
      <TextComponent text="Login to continue attending to your customers" />
      <InputComponent
        value={email}
        setValue={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
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
      <Text
        mb={20}
        fontWeight={'bold'}
        alignSelf={'flex-end'}
        color={'blue.800'}
      >
        Forgot Password
      </Text>
      <Box mt={20}>
        <Button mb={3} style={{ backgroundColor: colors.buttonColor }}>
          Login
        </Button>
        <HStack space={2} justifyContent={'center'}>
          <Text fontWeight={'bold'} alignSelf={'center'}>
            Don't have an account?
          </Text>
          <Pressable onPress={switchScreens}>
            <Text fontWeight={'bold'} color={'blue.800'}>
              Sign up
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </View>
  );
};

export default Login;
