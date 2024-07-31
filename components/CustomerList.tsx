import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserType } from '@/types/user'
import { fetchUsers } from '@/Services/cariList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

const CustomerList: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers)
        };
        fetchData();
    }, [])


    const renderItem = ({ item }: { item: UserType }) => {
        return (
            <TouchableOpacity>
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.name}</Text>
                    <Text style={styles.listItemText}>{item.company.name}</Text>
                    <Text style={styles.listItemText}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Email:</Text>{item.email}</Text>
                </View>
            </TouchableOpacity>

        )
    };

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        const filteredUsers = users.filter((user) => {
            const name = user.name.toLocaleLowerCase();
            const email = user.email.toLocaleLowerCase();
            const query = text.toLocaleLowerCase();
            return name.includes(query) || email.includes(query)
        });
        setUsers(filteredUsers);
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{ flex: 1 }}>
                <View style={[styles.searchBarContainer, { marginTop: 20 }]}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Arama'
                        value={searchQuery}
                        onChangeText={handleSearch}
                    />
                </View>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{ backgroundColor: Colors.black, padding: 55 }}>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
    },
    list: {
        flex: 1,
    },
    listItem: {
        marginVertical: 10,
        padding: 10,
        width: '90%',
        backgroundColor: Colors.tintColor,
        borderRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
        alignSelf: 'center',
    },
    listItemText: {
        fontSize: 16,
        color: Colors.white,
    },
    textInput: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        marginHorizontal: 15,
    },
    searchBarContainer: {
        padding: 10,
        backgroundColor: Colors.white,
        borderRadius: 15,
        width: '90%',
        alignSelf: 'center',


    }
})

export default CustomerList