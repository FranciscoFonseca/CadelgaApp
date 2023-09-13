import {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import RenderEntries from './components/renderEntries';

const BlogEntriesScreen = () => {
  const [blogEntries, setBlogEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogEntries = async () => {
      try {
        const response = await fetch(
          'https://cdn.contentful.com/spaces/bc89weuvj2l6/environments/master/entries?access_token=Bu38gRuDJh7nNrnQGxABIPSSLK7MXhfVLuPqYseeZwY',
        );
        const blogEntries = await response.json();
        setBlogEntries(blogEntries.items);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    fetchBlogEntries();
  }, []);

  const renderItem = ({item}: any) => {
    if (!item.fields.title) return <></>;
    return (
      <>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
            width: '100%',
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 10,
            borderRadius: 10,
          }}>
          <View style={{width: '45%'}}>
            {item.fields?.heroImage?.sys?.id && (
              <RenderEntries id={item.fields?.heroImage?.sys?.id} />
            )}
          </View>
          <View style={{width: '55%'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              {item.fields.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
              }}>
              {item.fields.excerpt}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error</Text>}
      <FlatList
        data={blogEntries}
        keyExtractor={item => item.sys.id}
        renderItem={renderItem}
        style={{width: '95%'}}
      />
    </View>
  );
};

export default BlogEntriesScreen;
