import React, {useEffect, useState} from 'react';
import {Product} from '../../types/ProductType';
import {View, Text, SectionList, ImageBackground} from 'react-native';
import ArrowButton from '../../components/buttons/ArrowButton/ArrowButton';
import {API_URL} from '../../constants/config';
import {SearchBar} from 'react-native-elements';
import {Fichas} from '../../constants/Fichas';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ProductosScreen = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const filteredData = Fichas.filter(
    item =>
      item.nombreProducto.toLowerCase().includes(search.toLowerCase()) ||
      (item.Categoría &&
        item.Categoría.toLowerCase().includes(search.toLowerCase())),
  );

  // Group the filtered data by category
  const groupedData = filteredData.reduce((result, item) => {
    const category = item.Categoría || 'Otros';
    const existingCategory = result.find(
      categoryObj => categoryObj.title === category,
    );
    if (existingCategory) {
      existingCategory.data.push(item);
    } else {
      result.push({title: category, data: [item]});
    }
    return result;
  }, []);
  // Sort the groupedData alphabetically by category title

  groupedData.forEach(item => {
    item.data.sort((a, b) => {
      if (a.nombreProducto < b.nombreProducto) {
        return -1;
      }
      if (a.nombreProducto > b.nombreProducto) {
        return 1;
      }
      return 0;
    });
  });

  const renderSectionHeader = ({section}: {section: {title: string}}) => (
    <View
      style={{
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'flex-end',
      }}>
      <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
        {section.title}
      </Text>
    </View>
  );

  const renderItem = ({item}: {item: any}) => (
    <>
      <ArrowButton
        style={{marginBottom: 10, height: 30}}
        key={item.nombreProducto}
        title={item.nombreProducto || ''}
        onPress={() =>
          navigation.navigate('ProductoDetails', {itemId: item.id})
        }
        leftColor={'#0068b3'}
        iconColor={'#0068b3'}
      />
    </>
  );

  return (
    <View
      // source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', height: '100%'}}>
        {}
        <SearchBar
          placeholder="Buscar Productos y Categorias"
          onChangeText={text => setSearch(text)}
          inputContainerStyle={{backgroundColor: 'white'}}
          lightTheme={true}
          containerStyle={{backgroundColor: 'transparent'}}
          value={search}
        />

        <SectionList
          sections={groupedData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingHorizontal: 15}}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    </View>
  );
};

export default ProductosScreen;
