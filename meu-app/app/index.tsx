import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CardProduto} from '../src/CardProduto'; 
import {listaProdutos} from '../src/produtos';

export default function TelaInicial() {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.tituloPrincipal}>Lista de Produtos</Text>

            {listaProdutos.map((produto) => (
                <CardProduto
                    key={produto.id}
                    nome={produto.nome}
                    quantidade={produto.quantidade}
                    validade={produto.validade}
                    preco={produto.preco}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    contentContainer: {
        padding: 20,
        paddingTop: 40,
    },

    tituloPrincipal: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});