import './Options.scss'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import * as React from 'react'

import Icon from '../../atoms/Icon/Icon'
import budgetBuild from './../../../assets/img/budgetPc.png'
import sweetSpot from './../../../assets/img/home-pc-2.png'
import premiumPc from './../../../assets/img/premiumPc.png'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
    },
    summary: {},
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

const Options: React.FC = () => {
  const classes = useStyles()
  return (
    <div className='Options_container'>
      <section className={`${classes.root}`}>
        <Accordion style={{ backgroundColor: 'transparent' }}>
          <AccordionSummary
            className={classes.summary}
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <section className='Options_option'>
              <p className='Options_description'>Budget</p>
              <img src={budgetBuild} alt='budget-build' />
            </section>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <section className='Options_value'>
              <Icon size='lg' color='white' type='Icon_processor' />
              <section>
                <p>Intel Core i3 10th gen comet lake / ryzen 3 3200g</p>
                <p>4 core 3.6ghz</p>
              </section>
              <Icon size='lg' color='white' type='Icon_memory' />
              <p>8gb de RAM DDR4</p>
              <Icon size='lg' color='white' type='Icon_storage' />
              <p>de 128gb a 1 tb de disco solido</p>
              <Icon size='lg' color='white' type='Icon_motherboard' />
              <p>Tarjeta Madre basica ATX compatible con procesador</p>
              <Icon size='lg' color='white' type='Icon_gpu' />
              <p>Graficos Integrados de Intel O AMD</p>
              <Icon size='lg' color='white' type='Icon_pc' />
              <p>Gabinete a eleccion de cliente</p>
              <Icon size='lg' color='white' type='Icon_money' />
              <p>≈ 10,000 a 15,000 + IVA</p>
            </section>
          </AccordionDetails>
        </Accordion>
      </section>
      <section>
        <Accordion style={{ backgroundColor: 'transparent' }}>
          <AccordionSummary
            className={classes.summary}
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <section className='Options_option'>
              <p className='Options_description'>Sweet Spot</p>
              <img src={sweetSpot} alt='budget-build' />
            </section>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <section className='Options_value'>
              <Icon size='lg' color='white' type='Icon_processor' />
              <section>
                <p>Intel Core i5 10th gen comet lake / ryzen 5 5600x</p>
                <p>6 core 3.7ghz</p>
              </section>
              <Icon size='lg' color='white' type='Icon_memory' />
              <p>16gb de RAM DDR4</p>
              <Icon size='lg' color='white' type='Icon_storage' />
              <p>de 512gb a 2 tb de disco solido</p>
              <Icon size='lg' color='white' type='Icon_motherboard' />
              <p>Tarjeta Madre ATX compatible con procesador</p>
              <Icon size='lg' color='white' type='Icon_gpu' />
              <p>Graficos Integrados o tarjeta de video rango medio</p>
              <Icon size='lg' color='white' type='Icon_pc' />
              <p>Gabinete a eleccion de cliente</p>
              <Icon size='lg' color='white' type='Icon_money' />
              <p>≈ 15,000 a 20,000 + IVA</p>
            </section>
          </AccordionDetails>
        </Accordion>
      </section>
      <section>
        <Accordion style={{ backgroundColor: 'transparent' }}>
          <AccordionSummary
            className={classes.summary}
            expandIcon={
              <Icon type='Icon_expand_more' color='white' size='lg' />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <section className='Options_option'>
              <p className='Options_description'>Premium</p>
              <img src={premiumPc} alt='budget-build' />
            </section>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <section className='Options_value'>
              <Icon size='lg' color='white' type='Icon_processor' />
              <section>
                <p>Intel Core i7 10th gen comet lake / ryzen 7 5800x</p>
                <p>8 core 3.8ghz</p>
              </section>
              <Icon size='lg' color='white' type='Icon_memory' />
              <p>16gb a 32gb de RAM DDR4</p>
              <Icon size='lg' color='white' type='Icon_storage' />
              <p>de 1tb a 3 tb de disco solido</p>
              <Icon size='lg' color='white' type='Icon_motherboard' />
              <p>Tarjeta Madre ATX compatible con procesador</p>
              <Icon size='lg' color='white' type='Icon_gpu' />
              <p>Graficos Integrados o tarjeta de video rango alto</p>
              <Icon size='lg' color='white' type='Icon_pc' />
              <p>Gabinete a eleccion de cliente</p>
              <Icon size='lg' color='white' type='Icon_money' />
              <p>≈ 20,000 a 30,000 + IVA</p>
            </section>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  )
}

export default Options
