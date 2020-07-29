import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media =  props => {
    const { min, max } = props.numeros
    const media = (min+max)/2
    return (
        <Card title='Média dos Números' green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{media}</strong>
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

export default connect(mapStateToProps)(Media)