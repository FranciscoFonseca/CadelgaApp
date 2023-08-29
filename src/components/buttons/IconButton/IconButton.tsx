import React from 'react';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconButtonProps {
  onPress: () => void;
  icon: string;
  style?: object;
  iconStyle?: object;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingSize?: number | 'small' | 'large';
  loadingStyle?: object;
}

const IconButton = ({
  onPress,
  icon,
  style,
  iconStyle,
  disabled,
  loading,
  loadingColor,
  loadingSize,
  loadingStyle,
  ...props
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <ActivityIndicator
          color={loadingColor}
          size={loadingSize}
          style={[styles.loading, loadingStyle]}
        />
      ) : (
        <Icon name={icon} style={[styles.icon, iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: '#fff',
    fontSize: 20,
  },
  loading: {
    marginVertical: 5,
  },
});

export default IconButton;
