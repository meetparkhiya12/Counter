import React from 'react'

import Card from 'react-bootstrap/Card';
import Counter from '../counter/counter';

function Manu1() {


  return (
 
		<div className="container d-flex">
			<Card className='me-4' style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../public/img/ST2561-SB.jpg" />
				<Card.Body>
				<Card.Title>Black Designer Suit</Card.Title>
				<Card.Text>
					Primium Black Suit & Trouser.
				</Card.Text>

				<h2>7999 ₹</h2>
				<Counter />

				</Card.Body>
			</Card>
			<Card className='me-4' style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../public/img/ST2567-BKL.jpg" />
				<Card.Body>
				<Card.Title>Black Designer Suit</Card.Title>
				<Card.Text>
					Primium Black Suit & Trouser.
				</Card.Text>

				<h2>8999 ₹</h2>
				<Counter />

				</Card.Body>
			</Card>
			<Card className='me-4' style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../public/img/ST2574-SB.jpg" />
				<Card.Body>
				<Card.Title>Black Designer Suit</Card.Title>
				<Card.Text>
					Primium Black Suit & Trouser.
				</Card.Text>

				<h2>9999 ₹</h2>
				<Counter />

				</Card.Body>
			</Card>
			<Card className='me-4' style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../public/img/TCPT2515-D239_1_720x (1).jpg" />
				<Card.Body>
				<Card.Title>Black Designer Suit</Card.Title>
				<Card.Text>
					Primium Black Suit & Trouser.
				</Card.Text>

				<h2>13999 ₹</h2>
				<Counter />

				</Card.Body>
			</Card>
		</div>

  )
}

export default Manu1;