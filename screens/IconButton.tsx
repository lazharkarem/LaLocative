import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-paper';
import {IconSizes, IconProps} from './Icons';

FontAwesomeIcon.loadFont();

type IconButtonProps = IconProps & {
  text: string;
  onPress: () => void;
};

export const IconButton = ({
  onPress,
  size,
  name,
  color,
  text,
}: IconButtonProps) => (
  <FontAwesomeIcon.Button
    onPress={onPress}
    name={name}
    size={IconSizes[size]}
    color={color}>
    <Text>{text}</Text>
  </FontAwesomeIcon.Button>
);
