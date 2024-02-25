import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayImage = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const apiUrl =
    'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s';

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = await AsyncStorage.getItem('cachedData');
      if (cachedData) {
        setImages(JSON.parse(cachedData));
      }
      fetchImages();
      const intervalId = setInterval(fetchImages, 2000);
      return () => clearInterval(intervalId);
    };

    fetchData();
  }, []);

  async function fetchImages() {
    try {
      const response = await axios.get(apiUrl);
      setImages(response.data.photos.photo);
      await AsyncStorage.setItem(
        'cachedData',
        JSON.stringify(response.data.photos.photo),
      );
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  const handleImageSelect = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <View className="flex flex-row flex-wrap justify-center">
        {images.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImageSelect(image)}>
            <Image
              source={{uri: image.url_s}}
              className="w-36 h-64 m-4 rounded-2xl"
            />
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex justify-center items-center h-96 absolute bottom-0 w-full bg-slate-300 bg-opacity-90">
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="absolute top-1 right-3">
            <Text className=" text-red-900 text-2xl  font-bold">X</Text>
          </TouchableOpacity>
          <Image
            source={{uri: selectedImage ? selectedImage.url_s : null}}
            className="w-80 h-80 rounded-lg"
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default DisplayImage;
