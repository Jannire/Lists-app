import React, { useState } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { Div, Button, StatusBar, Text } from 'react-native-magnus';

import { Task } from "../../components/task";

export default function HomeScreen() {
  const [ids, setIds] = useState(0);
  return (
    <Div>
      <StatusBar hidden={true} />
      <Div bg='indigo700' p={10} mb={10}>
        <Text color="white">
          Lists App
        </Text>
      </Div>
      <Div row justifyContent='center'>
        <Button bg="indigo700" style={styles.buttons}
          onPress={() => {
            console.log("Pressed");
          }}>
          + Nueva lista
        </Button>
      </Div>
      <Div row mt={15} style={styles.lists} justifyContent='center'>
        <Task ident={ids} />
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  ex: {
    backgroundColor: '#5D3FD3',
    justifyContent: 'center',
    padding: 10,
    alignSelf: "center"
  },
  buttons: {
    width: "50%",
  },
  lists:{
    width: "100%",

  },
});
