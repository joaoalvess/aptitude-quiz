import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #f4f4f5;
`
export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px
`;

export const Cargo = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;

export const Pergunta = styled.Text`
  font-size: 16px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 10px;
`;

export const TemperaturaText = styled.Text`
  font-size: 16px;
  margin-left: 40px;
  margin-top: 10px;
`;

export const Letra = styled.Text`
  font-size: 16px;
  margin-left: 40px;
  margin-right: 50px;
  margin-top: 20px;
  margin-bottom: 10px
`;

export const Sintomas = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TemperaturaColaborador = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SimouNao = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;

export const Temperatura = styled.TextInput`
  height: 30px;
  width: 50px;
  font-size: 24px;
  margin-right: -35px;
  margin-top: 10px
`;

export const Bolean = StyleSheet.create({
  Text: {
    
  },
  Button: {
    backgroundColor: '#6272a4',
    width: 300,
    height: 60,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});