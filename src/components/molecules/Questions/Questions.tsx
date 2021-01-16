import './Questions.scss'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import * as React from 'react'

import Icon from '../../atoms/Icon/Icon'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      color: 'white',
      fontSize: '1rem',
      fontWeight: 400,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      fontSize: '1rem',
      fontWeight: 400,
    },
  })
)

const Questions: React.FC = () => {
  const classes = useStyles()

  return (
    <div className='Questions_container'>
      <section>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <p className={classes.heading}>¿Facturan?</p>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <p>¡Claro</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <p className={classes.heading}>
              ¿Cuanto es el tiempo estimado de entrega?
            </p>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <p>
              Aproximadamente 2 semanas, dependiendo que tan rápido lleguen las
              partes para armar la computadora
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <p className={classes.heading}>
              ¿Que beneficios tiene armar una computadora a comprar una
              prearmada?
            </p>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <p>
              Comprar una computadora prearmada tiene varias desventajas: los
              precios se inflan, las partes son mas viejas de lo que hay
              actualmente en el mercado, las partes no tienen buena calidad.
              Pero tiene sentido, de algun lado tiene que sacar dinero compañías
              como dell o hp, simplemente es un mal plan de negocios para el
              cliente.
            </p>
            <br />
            <p>
              Al armar una computadora obtienes: precios no inflados, partes de
              calidad, partes nuevas, una computadora esteticamente mejor y lo
              mejor de todo, tu decides que hay en tu computadora y pagas por
              eso solamente.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <p className={classes.heading}>
              Tengo dudas tecnicas, ¿me pueden ayudar a resolverlas?
            </p>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <p>
              ¡Por supuesto! sabemos que no todos tenemos el tiempo para
              investigar acerca de todo lo nuevo en tecnología, arma2pc.con con
              gusto te ayuda a aclarar cualquier duda que tengas
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <p className={classes.heading}>¿Como gana dinero arma2pc.com?</p>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <p>
              Las partes de computadora se dan al precio del mometo, incluso las
              pueden comprar los clientes si asi lo desean, arma2pc.com solo
              cobra por armar la computadora y/o acesorar acerca de que partes
              comprar
            </p>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  )
}

export default Questions
