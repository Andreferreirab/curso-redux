import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Intervalo.css'
import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

export default props => {

    const numeros = useSelector(state => state.numeros)
    const { min, max } = numeros
    const dispatch = useDispatch()

    return (
        <Card title='Intervalo de números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => dispatch(alterarNumeroMinimo(+e.target.value))} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => dispatch(alterarNumeroMaximo(+e.target.value))} />
                </span>
            </div>
        </Card>
    )
}