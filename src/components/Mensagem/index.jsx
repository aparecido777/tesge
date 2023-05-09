import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Mensagem({
  titulo = "Título",
  corpo = "Corpo da Mensagem"
}) {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button onClick={handleOpen} variant="danger">
        Para ver mais sobre O Poderoso Chefão
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        // animation={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a
            href="https://www.youtube.com/watch?v=id3DSdFfXWs"
            class="btn btn-outline-dark"
            role="button"
            data-bs-toggle="button"
          >
            Clique para assitir no youtube
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
