import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Cart, CartTypes } from '@/types/cardType';
import { getCardData } from '@/Services/cardList';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardList = () => {
    const [carts, setCarts] = useState<CartTypes | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 3;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const skip = (currentPage - 1) * limit;
            const data = await getCardData(skip, limit);
            if (data) {
                setCarts((prevCarts) => ({
                  ...data,
                  carts: [...(prevCarts?.carts || []), ...data.carts],
                }));
                setTotal(data.total);
              }
          } catch (error) {
            console.error('Veri çekme hatası:', error);
          }
        };
    
        fetchData();
      }, [currentPage]);

      const renderItem = ({ item }: { item: Cart }) => (
        <View style={styles.card}>
          <Text style={styles.cardText}>Toplam Ürün: {item.totalProducts}</Text>
          <Text style={styles.cardText}>Toplam Tutar: {item.total}</Text>
          <Text style={styles.cardText}>Kullanıcı ID: {item.userId}</Text>
          <FlatList
            data={item.products}
            renderItem={({ item: product }) => (
              <View style={styles.productItem}>
                <View style={styles.borderProduct}> 
                <Text style={styles.productText}>Ürün Adı: {product.title}</Text>
                <Text style={styles.productText}>Ürün Fiyatı: {product.price}</Text>
                <Text style={styles.productText}>Ürün Miktar: {product.quantity}</Text>
                <Text style={styles.productText}> Ara Toplam: {product.total} </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            style={styles.productList}
          />
        </View>
      );
      const handleLoadMore = async () => {
        if (!carts) return; 
        const nextPage = currentPage + 1;
        const skip = (nextPage - 1) * limit;
        try {
          const data = await getCardData(skip, limit);
          if (data) {
            setCarts((prevCarts) => ({
              ...data,
              carts: [...(prevCarts?.carts || []), ...data.carts],
            }));
          }
          setCurrentPage(nextPage);
        } catch (error) {
          console.error('Yeni veri çekme hatası:', error);
        }
      };

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
       <View style={styles.cardListHeader}>
      <Text style={styles.cardListHeaderText}>Card Listesi</Text>
      {carts && (
        <FlatList
          data={carts.carts} 
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          onEndReachedThreshold={0.5} 
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false} 
        />
      )}
    </View>
    </View>
    </SafeAreaView>

  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  cardListHeader:{
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cardListHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  card: {
    backgroundColor: Colors.blue,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3, 
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  productList: {
    padding: 10,
  },
  productItem: {
    marginBottom: 5,
  },
  productText: {
    fontSize: 14,
    color:Colors.black
  },
  borderProduct: {
    backgroundColor: Colors.white,
    padding: 15,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation:  5,

  },


})

export default CardList