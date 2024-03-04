import React from 'react';
import {View, Image, Text, StyleSheet, Pressable, Alert} from 'react-native';
import Header from '../../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import globalStyle from '../../assets/styles/globalStyle';

const ProductDetails = props => {
  const data = props.route.params.data;
  console.log(data);
  return (
    <SafeAreaView style={globalStyle.backgroundWhiteFull}>
      <View
        style={{
          marginBottom: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal:10
        }}>
        <Header title="Products Details" type={1} />
        <Pressable onPress={()=> props.navigation.goBack()}>
          <Text>Back</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data.thumbnail}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{data.title}</Text>

       <Header title='Description ' type={2}/>
        <Text style={styles.productDescription}>{data.description}</Text>
        <Text style={styles.productPrice}>INR {data.price}/-</Text>
      </View>
      <Pressable style={styles.button} onPress={()=> Alert.alert('Comming Soon!')} >
        <Text style={{color:'#fff', fontSize:19}}>Add to cart</Text>
      </Pressable>
    </SafeAreaView>
  );
};


export default ProductDetails;
