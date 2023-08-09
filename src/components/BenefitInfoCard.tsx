import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Text} from '@femsa-core';

export const BenefitInfoCard = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: number;
}) => {
  return (
    <View>
      <Text
        variant="subtitle-semibold"
        style={{marginBottom: 12, fontWeight: '400'}}>
        {title}
      </Text>
      <Text variant="content-one-regular" style={{fontSize: 18}}>
        {text}
      </Text>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
    alignSelf: 'center',
  },
});
