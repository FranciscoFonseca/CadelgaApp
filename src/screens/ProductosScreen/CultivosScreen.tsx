import {ImageBackground, ScrollView} from 'react-native';
import {fitoSanitario} from '../../constants/programaFitosanitario';
import RenderData from '../FichaTecnicaScreen/RenderData';
import {SafeAreaView} from 'react-native-safe-area-context';
import SquareImageButton from '../../components/buttons/SquareButton/SquareImageButton';
import {useNavigation} from '@react-navigation/native';

const CultivosScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* <ScrollView>
        <RenderData data={fitoSanitario[0].fichaTecnica as any} />
      </ScrollView> */}

      <ImageBackground
        source={require('../../../assets/background.png')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SafeAreaView>
          <SquareImageButton
            title={'Cafe'}
            onPress={() => navigation.navigate('Cultivo')}
            image={require('../../../assets/cafe.jpg')}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default CultivosScreen;
