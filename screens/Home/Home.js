import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemCurrentPage, setItemCurrentPage] = useState(1);
  const [itemRenderedData, setItemRenderedData] = useState([]);
  const [isLoadingItem, setIsLoadingItem] = useState(false);



  const itemPageSize = 4;
  
  // useEffect(() => {
  //   setIsLoadingItem(true);
  //   const getInitialData = pagination(products, 1 , itemPageSize);
  //   console.log(pagination(products, 1, itemPageSize),'<><><>><><');
  //   Alert.alert('2')
  //   setItemRenderedData(getInitialData);
  //   setIsLoadingItem(false);
  // }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsLoadingItem(true);
      // Alert.alert(2)
      const getInitialData = pagination(products, 1 , itemPageSize);
      setItemRenderedData(getInitialData);
      setIsLoadingItem(false);
    }
  }, [isLoading, products]);

  const pagination = (productsss, currentPage, pageSize) => {
    // console.log(productsss,'<>><><>>><<><Check Kro');
    
    const startInde = (currentPage - 1) * pageSize;
    const endInde = startInde + pageSize;
    if (startInde >= products.length || !productsss) {
      return [];
    }
    console.log(currentPage, pageSize,startInde, endInde, '<><><');
    return productsss?.slice(startInde, endInde);
  };
  
 
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        // Alert.alert('3')
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);

  // console.log(products, '<><><><><<<>');

  return (
    <SafeAreaView style={globalStyle.backgroundWhiteFull}>
      <View style={{marginBottom: 15}}>
        <Header title="Products Home" type={1} />
      </View>
      <View style={{width: '100%'}}>
        {/* <ProductCard/> */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#adb5bd" />
        ) : (
     <FlatList
        data={itemRenderedData}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingItem) return;
            // Alert.alert('1')
            setIsLoadingItem(true);
            const contentToAppend =  pagination(
              products,
              itemCurrentPage + 1,
              itemPageSize,
            );

            if (contentToAppend?.length > 0) {
              setItemCurrentPage(itemCurrentPage + 1);
              setItemRenderedData(prev => [...prev , ...contentToAppend]);
              // Alert.alert('aya')
            }
            setIsLoadingItem(false)
          }}
          
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item}) => (
            <Pressable onPress={()=>navigation.navigate('ProductDetails',{data:item})}>
              <ProductCard 
                thumbnail={item.thumbnail}
                title={item.title}
                brand={item.brand}
                price={item.price}
                category={item.category}
              />
            </Pressable>
          )}
          contentContainerStyle={{paddingBottom: 50}}
        />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
