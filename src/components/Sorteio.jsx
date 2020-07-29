import React from 'react'
import Card from './Card'
import { connect } from "react-redux";

const Aleatorio = props => {
    const { min, max } = props.numeros
    const aleatorio = parseInt((Math.random() * (max - min))) + min
    return (
        <Card title='Sorteio de um Número' purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => ({ numeros: state.numeros })

export default connect(mapStateToProps)(Aleatorio)