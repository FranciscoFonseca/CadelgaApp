import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SquareImageButtonProps {
  title: string;

  image: any;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  loadingSize?: number | 'small' | 'large';
  loadingStyle?: object;
  imageStyle?: object;
  imageContainerStyle?: object;
}

const SquareImageButton = ({
  title,
  image,
  onPress,
  style,
  textStyle,
  disabled,
  loading,
  loadingColor,
  loadingSize,
  loadingStyle,
  imageStyle,
  imageContainerStyle,
  ...props
}: SquareImageButtonProps) => {
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
        <>
          <View style={[styles.imageContainer, imageContainerStyle]}>
            <Image
              source={image}
              style={[styles.image, imageStyle]}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text, textStyle]} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  image: {
    height: 200,
    width: 200,
    overflow: 'hidden',
  },
  loading: {
    marginVertical: 5,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
  textContainer: {
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default SquareImageButton;
