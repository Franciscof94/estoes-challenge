import React, { useState } from "react";
import { Wrapper } from "./Styles";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { editProject, idProjectDelete } from "../../store/actions/projectActions";
import { showModal } from '../../store/actions/modalActions'

import { Link } from "react-router-dom";

const MenuOpen = ({ id }) => {
  const dispatch = useDispatch();


  return (
    <Wrapper>
      <div></div>
      <Link to={`/edit`} onClick={() => dispatch(editProject(id))}>
        <RiEditBoxLine fontSize={18} color="black" />
        <span>Edit</span>
      </Link>
      <div onClick={() => {dispatch(showModal(true)); dispatch(idProjectDelete(id))}}>
        <RiDeleteBin7Line fontSize={18} />
        <span>Delete</span>
      </div>
      
    </Wrapper>
  );
};

export default MenuOpen;
