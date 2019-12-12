import React from 'react';
import { View, StyleSheet } from 'react-native';
import ModalRow from './ModalRow';

const ModalDetails = ({ data }) => {
  console.log(data);
  const { container } = styles;
  return (
    <View style={container}>
      <ModalRow iconName='infocirlceo' property='Nombre' value={data.nombre} />
      <ModalRow
        iconName='money'
        iconType='font-awesome'
        property='Precio unitario'
        value={`$${data.precio}`}
      />
      <ModalRow iconName='barcode' property='Codigo' value={data.id} />
      <ModalRow
        iconName='description'
        iconType='materialicons'
        property='Descripción'
        value={data.descripcion}
      />
    </View>
  );
};
export default ModalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%'
  }
});
