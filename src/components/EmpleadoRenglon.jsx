import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRenglon = () => {
  return (
    <>
      <ListGroup.Item className="border-primary border-bottom py-4 d-flex">
        <EmpleadoAvatar></EmpleadoAvatar>
        <div className="ms-4">
          <h6>Full name</h6>
          <div className="d-flex">
            <p className="me-3">Title</p>
            <p className="rounded-1 bg-info">department</p>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default EmpleadoRenglon;
