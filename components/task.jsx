import React from 'react';
import { StyleSheet } from 'react-native';
import { Div, Collapse, Button, StatusBar, Text } from 'react-native-magnus';

export function Task({ ident }) {

  return <Collapse>
    <Collapse.Header>
      <Text color="white">
        ID: {ident}
      </Text>
    </Collapse.Header>

    <Collapse.Body>
      <Text color="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis
        corporis ut, ex sed aperiam. Debitis, facere! Animi quis laudantium, odio
        nulla recusandae labore pariatur in, vitae corporis delectus repellendus.
      </Text>
    </Collapse.Body>
  </Collapse>

}

const styles = StyleSheet.create({
  tarea: {
    width: "100%",
  },
});