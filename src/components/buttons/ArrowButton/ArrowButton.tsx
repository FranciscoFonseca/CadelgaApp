import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

interface ArrowButtonProps {
  onPress: () => void;
  title: string;
  leftColor: string;
  iconColor: string;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingSize?: number | 'small' | 'large';
  loadingStyle?: object;
}

const ArrowButton = ({
  onPress,
  title,
  leftColor,
  iconColor,
  style,
  textStyle,
  disabled,
  loading,
  loadingColor,
  loadingSize,
  loadingStyle,
  ...props
}: ArrowButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}>
      <View style={[styles.leftSide, {backgroundColor: leftColor}]} />
      <View style={styles.contentContainer}>
        {loading ? (
          <ActivityIndicator
            color={loadingColor}
            size={loadingSize}
            style={[styles.loading, loadingStyle]}
          />
        ) : (
          <>
            <Text style={[styles.text, textStyle]}>{title}</Text>
            <Icon name="chevron-right" size={20} color={iconColor} />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: 15,
  },
  leftSide: {
    width: 10,
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  loading: {
    marginVertical: 5,
  },
});

export default ArrowButton;
