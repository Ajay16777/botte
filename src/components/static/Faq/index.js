import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@material-ui/core';
import styles from './Styles';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = styles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={classes.root}>
      <Box mt={4} mb={6}>
        <Typography variant='h4'>
          Frenquently Asked Questions
        </Typography>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>Parcels</Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              What is min/max weight?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              There is no fixed min and max weight.The minimum and
              maximum parcel weights are at the discretion of the
              courier (traveller). The courier will indicate his or
              her available luggage allowance. As a sender, discuss
              and agree on package requirements with the courier.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              What category of items am I allowed to send?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Documents, books, keys, jewellery, ornaments, clothes
              and accessories, canned food, dried food, small
              electronics, wigs and hair extensions, wooden fixtures,
              fabrics, eyeglasses and frames, utensils, stationery,
              cosmetics, perfumes and fragrance. Some other items such
              as shoes, medicines, herbal supplements may be
              considered at a future date but currently are not
              allowed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Are any items prohibited?{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Yes, there are some items which are not allowed, these
              include: Compressed gas, liquids or aerosols. Sharp
              objects Fire works Batteries, Infectious substances,
              Radioactive materials, strong magnets Poisons, fuels or
              inflammable substances. Shoes, medicines and herbal
              supplements are also not allowed at this time.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>
            Security and Insurance{' '}
          </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Can I insure my goods?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Yes, you can insure your items and we encourage this
              option. Botte is however not liable for the safety of
              your items as users transact at their discretion.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              What if, despite the rigorous security checks encouraged
              during transactions, I am implicated for a contraband
              item?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Botte has provided guidelines on required safety checks.
              It is vital that these are strictly adhered to at all
              times. In the unlikely event of a breach of protocol
              regarding the acceptability of parcel content, Botte
              will comply fully with law enforcement and concerned
              government agencies. This will include a thorough audit
              of transaction communication trail to ascertain that
              guidance was followed, transaction history, etc. this
              will help ascertain the following; were the safety
              checks performed? Are all items on the list allowed?
              Documents to be signed at hand-off of parcels,
              photographs. These will help exonerate innocent users.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              How to respond to airport security question “Did you
              pack your bags?”
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              It is expected you have checked the items you are
              couriering before accepting them. Hence, it is safe to
              accept that you have packed your bags yourself.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>Operations </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              What countries can I make a delivery to/from?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Currently we are focused on deliveries between the UK
              and these 7 countries. These are a. Nigeria b.
              Bangladesh c. India d. Spain e. Kenya f. Romania g.
              Philippines We will roll out services to these
              destinations sequentially. If you would like service to
              be extended to your region follow the link to upvote
              your desired destination. If it is not already there,
              please enter and invite others to vote.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              How long does a typical delivery take ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Botte is a peer-to-peer delivery platform and therefore
              the delivery time frame depends on the agreement between
              transacting individuals. The travel window will be
              clearly stated by the courier (traveller) and the parcel
              sender will indicate their required delivery time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel9'}
          onChange={handleChange('panel9')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              What does Botte offer and what is outside its operating
              scope?{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Features. Botte is a platform that connects parcel
              senders and travellers to enable symbiotic/mutually
              benefitting transactions. - We curate traveller journeys
              and delivery needs to allow discovery. - We facilitate
              connection between individuals with compatible
              requirements and offers. - We offer a simple support
              system via chat{' '}
              <Button
                variant='standard'
                style={{
                  textDecoration: 'underline',
                  color: '#6FB462',
                  padding: 0,
                }}
                component={Link}
                to='/contact'
              >
                Contact Us
              </Button>{' '}
              - We offer guidance on transacting safely This is the
              first iteration of this platform and we plan to enhance
              user experience further in subsequent releases. We do
              not offer: - Real-time parcel tracking, - ID check or
              authentication - Payment processing - Guaranteed home
              collection or delivery - transaction details at the
              discretion of transacting parties - Insurance of items
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel10'}
          onChange={handleChange('panel10')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              How do I arrange for the pickup/dropoff of my items?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              The pickup/dropoff location must be agreed to by the
              transacting parties before commencing transaction. When
              both parties agree to transact, details of the recipient
              should be sent to the courier (traveller) including
              name, phone number, and agreed meet-up location. The
              transaction ID should be sent to the recipient as the
              courier will need to verify this number to handover the
              package.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>Payment</Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel11'}
          onChange={handleChange('panel11')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              How do I make a payment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Payments can be made directly between transacting
              parties. Customers are adviced to make payments using
              traceable electronic payment methods and sharing proof
              of payment with the other transacting party.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel12'}
          onChange={handleChange('panel12')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              How do I get paid?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography>
              As a courier, the payment schedule as well as the price
              should be agreed with the sender before accepting items.
              Successive iterations will integrate payment on Botte's
              platform
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>Report Issues </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel13'}
          onChange={handleChange('panel13')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Theft, Damage
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Transact with caution by only sending items upto the
              value of £65. In the unlikely event that an item is
              damaged or stolen the first thing is to contact the
              other transacting party right away and aim to resolve
              this directly within a week. If a direct resolution is
              unsuccessful, then initiate a formal dispute. to{' '}
              <Button
                variant='standard'
                style={{
                  textDecoration: 'underline',
                  color: '#6FB462',
                  padding: 0,
                }}
                component={Link}
                to='/contact'
              >
                Contact Us
              </Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel14'}
          onChange={handleChange('panel14')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              How are disputes resolved?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography>
              It is expected that disputes are rare when guidelines
              are followed. However, in the event a dispute is raised,
              Botte will provide a framework of required evidence, the
              opportunity for each party to state their respective
              position. We aim to resolve every dispute amicably
              within a week. All communication from Botte will be
              conveyed in writing.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>App</Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel15'}
          onChange={handleChange('panel15')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Do you have an app for this?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              At the moment we only operate this website. A stand
              alone app is in the works and if you are signed-up to
              our newsletter, you will be among the first to know when
              it launches. Click here to
              <Button
                variant='standard'
                style={{
                  textDecoration: 'underline',
                  color: '#6FB462',
                  padding: 0,
                }}
                component={Link}
                to='/auth/signup'
              >
                Sign up
              </Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>Safety guidance</Typography>
        </Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              - Only exchange physical items after nature of the item,
              price, dates, and delivery locations have been agreed.
              <br />
              - Transactions should take place in public spaces, under
              no circumstance should you place yourself in a
              vulnerable situation by meeting in a secluded place.
              <br />
              - inspect package contents carefully before accepting
              them. Take photographs as necessary.
              <br />
              - Remember to follow airline guidance regarding items to
              be checked-in and those allowed as hand luggage.
              <br />- if at any point you feel uncomfortable
              travelling with any items, please communicate this with
              the sender and arrange to return. You should not feel
              pressured at anytime to complete a transaction.
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Box>
    </section>
  );
};

export default Faq;
