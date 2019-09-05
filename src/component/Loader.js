import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = props => {
  const { loading } = props;

  return (
    <div>
      {loading ? (
        <div className="static-modal text-center m-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Loader;
