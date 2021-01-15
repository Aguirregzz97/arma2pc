import './Table.scss'

import * as React from 'react'

import Icon from '../Icon/Icon'

const Check: React.FC = () => {
  return <Icon color='yellow' type='Icon_check' size='lg' />
}

const Table: React.FC = () => {
  return (
    <div className='Table_container'>
      <table>
        <tr>
          <th></th>
          <th>arma2pc.com</th>
          <th>otros (pcel, cyberpuerta, hp, dell)</th>
        </tr>
        <tr>
          <td>Factura</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr>
          <td>Partes Nuevas</td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Precios Razonables</td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Eleccion de Partes</td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Servicio Personalizado</td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Honestidad</td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Table
