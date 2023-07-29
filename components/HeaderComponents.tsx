import { StyleSheet } from 'react-native';
import { Heading, Text } from 'native-base';
import React from 'react';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types';

type Props = {
  title: string;
  w?: string;
  mb?: number;
  textAlign?: ResponsiveValue<'center'>;
};

export const HeaderComponents = ({ title, w, mb, textAlign }: Props) => {
  return (
    <Heading textAlign={textAlign} w={w} mb={mb}>
      {title}
    </Heading>
  );
};
interface TextProps {
  text: string;
  color?: string;
  textAlign?: ResponsiveValue<'center'>;
}
export const TextComponent = ({ text, color, textAlign }: TextProps) => {
  return (
    <Text color={color} textAlign={textAlign} mb={10}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({});
