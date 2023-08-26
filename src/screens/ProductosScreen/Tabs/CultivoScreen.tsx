import {ImageBackground, ScrollView} from 'react-native';
import {fitoSanitario} from '../../../constants/programaFitosanitario';
import RenderData from '../../FichaTecnicaScreen/RenderData';

const CultivoScreen = () => {
  return (
    <>
      <ImageBackground
        source={require('../../../../assets/background.png')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          <RenderData data={fitoSanitario[0].fichaTecnica as any} />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default CultivoScreen;
