import React, {Component} from 'react';

import {Text, TouchableHighlight, View} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Mailer from 'react-native-mail';
import CotizadorUtil from './CotizadorUtil';
// export default class Example extends Component {
//   async createPDF() {
//     let options = {
//       html: '<h1>PDF TEST</h1>',
//       fileName: 'test',
//       directory: 'Documents',
//     };

//     let file = await RNHTMLtoPDF.convert(options);
//     console.log(file.filePath);
//     // alert(file.filePath);
//   }

//   render() {
//     return (
{
  /* <View>
  <TouchableHighlight onPress={this.createPDF}>
    <Text>Create PDF</Text>
  </TouchableHighlight>
</View>; */
}
//     );
//   }
// }
const Example = () => {
  const createPDF = async () => {
    let options = {
      html: CotizadorUtil(),
      fileName: 'test',
      directory: 'Documents',
      width: 300,
    };

    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    Mailer.mail(
      {
        subject: 'need help',
        recipients: ['kikirey097@gmail.com'],
        body: '<b>A Bold Body</b>',
        isHTML: true,
        attachments: [
          {
            path: file.filePath, // The absolute path of the file from which to read data.
            type: 'pdf', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            name: 'test', // Optional: Custom filename for attachment
          },
        ],
      },
      (error, event) => {
        console.log(error);
      },
    );

    // alert(file.filePath);
  };
  return (
    <View>
      <TouchableHighlight onPress={createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  );
};
export default Example;
