import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Produto } from './produtos';

export function CardProduto({ nome, quantidade, validade, preco }: Omit<Produto, 'id'>) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{nome}</Text>

            <View style={styles.detalhesContainer}>
                <Text style={styles.texto}>Qtd: {quantidade}</Text>
                <Text style={styles.texto}>Validade: {validade}</Text>
            </View>

            <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#007bff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 8,
    },

    detalhesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    texto: {
        fontSize: 14,
        color: '#666',
    },

    preco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#28a745',
        textAlign: 'right',
    },
});