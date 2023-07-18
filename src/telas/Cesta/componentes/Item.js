import React from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";

import Texto from "../../../Componentes/Texto";

export default function Itens({item: {nome, imagem}}) {
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    imagem: {
        width: 58,
        height: 58
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})