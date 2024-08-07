import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizModal = ({
  message,
  points,
  displayExplanation,
  showReference,
  nextQuestion,
  show,
}) => {
  return (
    <>
      <Modal className="modal-styles" show={show}>
        <Modal.Header>
          <Modal.Title>
            <h2 className="modal-text">💡 {message}</h2>
            <h3 className="modal-text">Points: {points}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Answer:</b>
          </p>
          <p>{displayExplanation}</p>
          <a
            className="modal-link"
            href={showReference}
            target="_blank"
            rel="noopener noreferrer"
          >
            👉Learn more with our Online learning platform
          </a>
          <br />
          <br />
          <p>
            Wanna learn how to code? <br /> Join us for free👉{" "}
            <a
              className="modal-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.lupleg.website/dashboard"
            >
              Learn to Code With Lupleg
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-btn" onClick={nextQuestion}>
            Next Question
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default QuizModal;
