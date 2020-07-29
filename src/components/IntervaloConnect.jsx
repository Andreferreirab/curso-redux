import React from 'react'
import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

const Intervalo = props => {

    const { min, max } = props.numeros

    return (
        <Card title='Intervalo de números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // Action Creator => action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },

        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)