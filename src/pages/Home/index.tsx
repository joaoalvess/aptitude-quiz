import React, { useState, useEffect } from 'react';
import { Picker, TouchableOpacity } from 'react-native'
import { Container, Title, Cargo, Pergunta, Sintomas, SimouNao, Bolean, ButtonText, Letra, Temperatura, TemperaturaColaborador, TemperaturaText } from './styles';

const Home: React.FC = () => {
  const [selectUser, setSelectUser] = useState("João Alves");
  const [trabalho, setTrabalho] = useState("")
  const [data, setdata] = useState("")
  const [genero, setGenero] = useState("O colaborador")
  const [apto, setApto] = useState("esta apto ao trabalho")

  const [contato, setContato] = useState("nao");
  const [febre, setfebre] = useState("nao");
  const [calafrios, setCalafrios] = useState("nao");
  const [ar, setAr] = useState("nao");
  const [tosse, setTosse] = useState("nao");

  const [temperatura, setTemperatura] = useState<any>(36.0);

  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes

  useEffect(() => {
    if(selectUser == "João Alves") {
      return setTrabalho("Supervisor")
    }
    if(selectUser == "José Carlos" || selectUser == "Joselito") {
      return setTrabalho("Artifice")
    }
    if(selectUser == "José Rodriguez" || selectUser == "Thiago Henrique" || selectUser == "Marcilene Barbosa" || selectUser == "Lindinalva Bernardo" || selectUser == "Edmilson Peres") {
      return setTrabalho("Servente")
    }
    if(selectUser == "Patricia Alves" || selectUser == "Renata" || selectUser == "Nayara Xavier" || selectUser == "Jacylanne Moreira") {
      return setTrabalho("Recepcionista")
    }
    if(selectUser == "Debora Barbosa") {
      return setTrabalho("Continua")
    }
    if(selectUser == "Jedson Diaz" || selectUser == "Luciano Roberto" || selectUser == "Cloves Gomes") {
      return setTrabalho("Motorista")
    }
  },[selectUser])

  useEffect(() => {
    setdata(date + '/' + month + '/' + year)
  },[])

  useEffect(() => {
    if(temperatura >= 37.8 || contato == "sim" || febre == "sim" || calafrios == "sim" || ar == "sim" || tosse == "sim") {
      return setApto("não esta apto ao trabalho")
    }
    else{
      return setApto("esta apto ao trabalho")
    }
  },[temperatura,contato,febre,calafrios,ar,tosse])

  async function reset() {
    setContato("nao")
    setfebre("nao")
    setCalafrios("nao")
    setAr("nao")
    setTosse("nao")
    setTrabalho("Supervisor")
    setSelectUser("João Alves")
    setTemperatura("36.0")
  }

  useEffect(() => {
    if(selectUser == "Patricia Alves" || selectUser == "Renata" || selectUser == "Nayara Xavier" || selectUser == "Jacylanne Moreira" || selectUser == "Marcilene Barbosa" || selectUser == "Lindinalva Bernardo" || selectUser == "Debora Barbosa") {
      return setGenero("A colaboradora")
    }
    else{
      return setGenero("O colaborador")
    }
  },[selectUser])

  return (
    <Container>
      <Title>Questionário Diário de Sintomas {data} </Title>
      <Picker
        selectedValue={selectUser}
        style={{ height: 50, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectUser(itemValue)}
      >
        <Picker.Item label="João Alves" value="João Alves" />

        <Picker.Item label="José Carlos" value="José Carlos" />
        <Picker.Item label="Joselito" value="Joselito" />

        <Picker.Item label="José Rodriguez" value="José Rodriguez" />
        <Picker.Item label="Thiago Henrique" value="Thiago Henrique" />
        <Picker.Item label="Marcilene Barbosa" value="Marcilene Barbosa" />
        <Picker.Item label="Lindinalva Bernardo" value="Lindinalva Bernardo" />
        <Picker.Item label="Edmilson Peres" value="Edmilson Peres" />

        <Picker.Item label="Patricia Alves" value="Patricia Alves" />
        <Picker.Item label="Renata" value="Renata" />
        <Picker.Item label="Nayara Xavier" value="Nayara Xavier" />
        <Picker.Item label="Jacylanne Moreira" value="Jacylanne Moreira" />

        <Picker.Item label="Debora Barbosa" value="Debora Barbosa" />

        <Picker.Item label="Jedson Diaz" value="Jedson Diaz" />
        <Picker.Item label="Luciano Roberto" value="Luciano Roberto" />
        <Picker.Item label="Cloves Gomes" value="Cloves Gomes" />
      </Picker>
      <Cargo>Colaborador: {selectUser} </Cargo>
      <Cargo>Função: {trabalho} </Cargo>
      <Pergunta>1. Você teve contato próximo com alguma pessoa testada positiva para COVID-19 nos últimos 14 dias?</Pergunta>
        <Picker
          selectedValue={contato}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setContato(itemValue)}
        >
          <Picker.Item label="Sim" value="sim" />
          <Picker.Item label="Não" value="nao" />
        </Picker>
      <Pergunta>2. Você apresentou algum dos seguintes sintomas nas últimas 24 horas?</Pergunta>
      <Sintomas>
        <SimouNao>
          <Letra style={Bolean.Text}>A. Febre</Letra>
          <Picker
            selectedValue={febre}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setfebre(itemValue)}
          >
            <Picker.Item label="Sim" value="sim" />
            <Picker.Item label="Não" value="nao" />
          </Picker>
        </SimouNao>
        <SimouNao>
          <Pergunta>B. Calafrios</Pergunta>
          <Picker
            selectedValue={calafrios}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setCalafrios(itemValue)}
          >
            <Picker.Item label="Sim" value="sim" />
            <Picker.Item label="Não" value="nao" />
          </Picker>
        </SimouNao>
      </Sintomas>
      <Sintomas>
        <SimouNao>
      <Pergunta>C. Falta de Ar</Pergunta>
      <Picker
        selectedValue={ar}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setAr(itemValue)}
      >
        <Picker.Item label="Sim" value="sim" />
        <Picker.Item label="Não" value="nao" />
      </Picker>
      </SimouNao>
      <SimouNao>
        <Pergunta>D. Tosse</Pergunta>
        <Picker
          selectedValue={tosse}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setTosse(itemValue)}
        >
          <Picker.Item label="Sim" value="sim" />
          <Picker.Item label="Não" value="nao" />
        </Picker>
        </SimouNao>
      </Sintomas>
      <Pergunta>{genero} {selectUser} esta com:</Pergunta>
      <TemperaturaColaborador>
        <Temperatura 
          onChangeText={Number => setTemperatura(Number)}
          value={temperatura}
          keyboardType="numeric"
        />
        <TemperaturaText>Graus e {apto}.</TemperaturaText>
      </TemperaturaColaborador>
      <TouchableOpacity
        style={Bolean.Button}
        onPress={reset}
      >
        <ButtonText>Reset</ButtonText>
      </TouchableOpacity>
    </Container>
  )
}

export default Home;