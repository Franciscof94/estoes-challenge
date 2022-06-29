import React from "react";
import { Wrapper } from "./Styles";
import { TiDeleteOutline } from "react-icons/ti";
import { Button } from "../../share/Button";
import { connect, useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/actions/modalActions";
import { deleteProject } from "../../store/actions/projectActions";

const Modal = ({ id }) => {
  const dispatch = useDispatch();


  return (
    <Wrapper>
      <div>
        <TiDeleteOutline fontSize={92} color="var(--red-color)" />
      </div>
      <div>Are you sure you want to delete the task?</div>
      <div>
        <Button variant="secondary" onClick={() => dispatch(showModal(false))}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(showModal(false));
            dispatch(deleteProject(id));
          }}
        >
          Delete
        </Button>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  id: state.project.id
});

export default connect(mapStateToProps)(Modal);
