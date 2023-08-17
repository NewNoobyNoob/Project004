import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactsScreen = () => {
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await Contacts.requestPermissionsAsync();
            if(status === 'granted') {
                const {data} = await Contacts.getContactsAsync();
                setContacts(data);
            }
        })();
    }, []);

    // console.log(contacts);

  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <Text>Contacts Screen</Text>
      <FlatList
      data={contacts}
      renderItem={({item}) => (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.phoneNumbers[0].number}</Text>

      </View>
      )} 
      />
    </View>
  )
}

export default ContactsScreen;