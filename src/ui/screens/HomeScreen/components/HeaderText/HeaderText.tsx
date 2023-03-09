import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../../shared/theme/globalStyles';

interface Props {
  title: string;
  subTitle: string;
}

export default function HeaderText({title, subTitle}: Props) {
  return (
    <View>
      <Text style={globalStyles.textLargeBold}>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}
