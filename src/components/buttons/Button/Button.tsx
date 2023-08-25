import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingSize?: number | 'small' | 'large';
  loadingStyle?: object;
}

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  loading,
  loadingColor,
  loadingSize,
  loadingStyle,
  ...props
}: ButtonProps) => {
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
        <Text style={[styles.text, textStyle]}>{title}</Text>
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
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    marginVertical: 5,
  },
});

export default Button;
