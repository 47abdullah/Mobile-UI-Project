import { View, Text, Touchable, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Todo, TodoResponse } from '@/types/userTest'
import { getData } from '@/Services/cariList';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const DataList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 30


  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = (currentPage - 1) * limit;
        const data = await getData(skip, limit);
        if (data) {
          setTodos((prevTodos) => [...prevTodos, ...data.todos]);
          setTotal(data.total);
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const renderItem = ({ item }: { item: Todo }) => {

    return (
      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listText}>ID: {item.id}</Text>
        <Text style={styles.listText}>Todo: {item.todo}</Text>
        <Text style={styles.listText}>Completed: {item.completed ? 'Evet' : 'Hayır'}</Text>
        <Text style={styles.listText}> uSER İD{item.userId} </Text>
      </TouchableOpacity>
    )
  }
  const handleLoadMoreData = () => {
    if (todos.length >= total) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };


  return (
    <SafeAreaView style={{flex: 1,
      backgroundColor: Colors.black,}}>
        <View style={styles.container}>
      <Text style={styles.title}>DataList</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        style={styles.flatlist}
        onEndReachedThreshold={0.5}
        onEndReached={() => handleLoadMoreData()}
        
      />

      <View style={{ backgroundColor: Colors.black, padding: 55 }}>
        <Text style={{ color: Colors.black }}></Text>
      </View>
    </View>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
   color:Colors.white,
    alignSelf:'center',
  },
  flatlist: {
    flex: 1
  },

  listItem: {
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  listText: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.white,
  },
})




export default DataList