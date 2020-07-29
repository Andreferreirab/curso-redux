
// Action Creator
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'NUM_MIN_ALTERAR',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: 'NUM_MAX_ALTERAR',
        payload: novoNumero
    }
}