import {useEffect, useState} from 'react';
import {Image} from 'react-native';

interface RenderEntriesProps {
  id: string;
}

const RenderEntries = ({id}: RenderEntriesProps) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const getImagebyId = async (id: string) => {
    try {
      const imageUrl = `https://cdn.contentful.com/spaces/bc89weuvj2l6/environments/master/assets/${id}?access_token=Bu38gRuDJh7nNrnQGxABIPSSLK7MXhfVLuPqYseeZwY`;
      const response = await fetch(imageUrl);
      const data = await response.json();
      setImage(`https:${data.fields.file.url}`);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getImagebyId(id);
  }, [id]);
  return (
    <>
      {image && (
        <Image
          source={{
            uri: image,
          }}
          style={{width: 150, height: 150}}
        />
      )}
    </>
  );
};

export default RenderEntries;
