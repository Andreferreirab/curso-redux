import React from 'react'
import Card from './Card'
import { useSelector } from "react-redux";

export default props => {
    const numeros = useSelector(state => state.numeros)
    const { min, max } = numeros
    const soma = min + max
    return (
        <Card title='Soma dos Números' blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{soma}</strong>
                </span>
            </div>
        </Card>
    )
}