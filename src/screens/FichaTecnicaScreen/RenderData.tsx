import React from 'react';
import {View, Text} from 'react-native';
import {JSONData, Subtitle, TitleData} from '../../types/generic';
import {Row, Rows, Table} from 'react-native-table-component';

interface Props {
  data: JSONData;
}
interface TableData {
  headers: string[];
  rows: string[][];
}
interface TableProps {
  tableData: TableData;
}
const RenderData: React.FC<Props> = ({data}) => {
  const TableComponent: React.FC<TableProps> = ({tableData}) => {
    return (
      <Table>
        <Row
          data={tableData.headers}
          style={{height: 40}}
          textStyle={{margin: 6}}
        />
        <Rows data={tableData.rows} textStyle={{margin: 6}} />
      </Table>
    );
  };
  return (
    <View>
      {Object.entries(data).map(([title, content]) => (
        <View key={title} style={{marginTop: 8}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {title.replace('tabla#tabla-', '')}
          </Text>
          {title.includes('tabla#tabla-') ? (
            <TableComponent tableData={content} />
          ) : typeof content === 'string' ? (
            <Text>{content}</Text>
          ) : (
            (content as Subtitle[]).map((subtitle, index) => (
              <View key={index}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {Object.keys(subtitle)[0]}:
                </Text>
                <Text>{Object.values(subtitle)[0]}</Text>
              </View>
            ))
          )}
        </View>
      ))}
    </View>
  );
};

export default RenderData;
