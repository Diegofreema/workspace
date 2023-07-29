import { StyleSheet } from 'react-native';

import React from 'react';
import { Box, Button, Center, HStack, Image, Stack, View } from 'native-base';
import {
  HeaderComponents,
  TextComponent,
} from '../../components/HeaderComponents';
import { colors } from '../../constants/Colors';

type Props = {};

const IntroScreen = (props: Props) => {
  return (
    <Box safeAreaX={5} flex={1}>
      <HeaderComponents
        title="Get an organised way to solve problems"
        textAlign={'center'}
      />
      <TextComponent
        text="Own a workspace, connect to clients and get issues solved."
        textAlign={'center'}
        color={colors.textGray}
      />
      <Center flex={1} justifyItems={'center'}>
        <Image
          alt="back"
          source={require('../../assets/img.png')}
          style={styles.img}
        />

        <Box
          w={'full'}
          h={'180px'}
          position={'absolute'}
          bottom={0}
          backgroundColor={'white'}
          justifyContent={'center'}
        >
          <View
            position={'absolute'}
            w={'full'}
            h={'50px'}
            top={-20}
            backgroundColor={'rgba(255, 255, 255,0.9)'}
          />
          <HStack space={10} justifyContent={'center'}>
            <Button variant={'outline'} w={'150px'}>
              Skip
            </Button>
            <Button backgroundColor={colors.buttonColor} w={'150px'}>
              Next
            </Button>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  img: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
});
