import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Oferta() {

    const ejemploOferta = [
        { id: 1, puesto: "Software Engineer", empresa: "Toptal", lugar: "Madrid" },
        { id: 2, puesto: "Front End Developer", empresa: "AYTT", lugar: "Remote" },
        { id: 3, puesto: "iOS Deverloper", empresa: "Redlek", lugar: "London" }
    ];

    const getParam = useParams()
    const oferta = parseInt(getParam.id)

    const ofertaElegida = ejemploOferta.filter(item => item.id === oferta)
    
    return (
        <div>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>{ofertaElegida[0].puesto} en {ofertaElegida[0].empresa}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>--- Mostrar más detalles de la oferta aquí ----</p>
            </Modal.Body>

            <Modal.Footer>
                <Link to="/"><Button variant="secondary">Volver a la página principal</Button></Link>
                <Button variant="primary">Empezar Solicitud</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
      );
    
}