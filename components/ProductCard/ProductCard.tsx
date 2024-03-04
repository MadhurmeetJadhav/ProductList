import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

interface Props {
    title: string,
    price: number,
    brand: string,
    category: string,
    thumbnail: string
}

const ProductCard: FC<Props> = ({ title, price, brand, category, thumbnail }) => {

    const truncateString = (str: string, maxLength: number) => {
        return str?.length > maxLength ? str?.slice(0, maxLength) + '...' : str;
    };
    return <View style={styles.container}>

        {/* <View style={{ width: '20%' }}>
            <View >
                <Image source={require('../../assets/image/img1.jpg')} />
            </View>
        </View>
        <View></View> */}
        <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: thumbnail }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{truncateString(title, 13)}</Text>
                <Text style={{ fontSize: scaleFontSize(19), color: 'green', fontWeight: '500' }}>Price : {price}</Text>
                <Text style={styles.info}>Brand : {brand}</Text>
                <Text style={styles.info}>Category : {category}</Text>
            </View>
        </View>
    </View>;
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // backgroundColor: 'green',
        paddingVertical: verticalScale(10),
        marginHorizontal: horizontalScale(10),
        borderWidth: 4,
        borderColor: '#adb5bd',
        marginBottom: verticalScale(10),

    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    imageContainer: {
        width: '30%',
        alignItems: 'center',
        borderRightWidth: 4,
        borderRightColor: '#adb5bd',
        paddingRight: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40, // to make it circular
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
        flexDirection: 'column'
    },
    name: {
        fontSize: scaleFontSize(28),
        fontWeight: 'bold',
    },
    info: {
        fontSize: 14,
    },
});