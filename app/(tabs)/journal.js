/* Ofe */
/* Journal Page [journal.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import React from "react";
import CreateJournalPost from '../../components/createJournalPostModal';

export default function JournalScreen() {
    return (
        <View style={styles.container}>
            <CreateJournalPost></CreateJournalPost>
            {/*<View>
                <FlatList
                    data={[
                    {key: 'Creation'},
                    {key: 'Fall'},
                    {key: 'Jesus Coming to Earth'},
                    {key: 'The Cross'},
                    {key: 'Three Days Later'},
                    {key: 'Ascension'},
                    {key: 'His Return'},
                    {key: 'What does this mean for you?'},
                    ]}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
                />
            </View> <- Work on creating a way to show data in a list like iOS, for journal posts.*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0ECE2',
    },
});