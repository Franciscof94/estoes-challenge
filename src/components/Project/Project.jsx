import React, { useState } from "react";
import { Mobile, Wrapper } from "./Styles";
import { IoMdMore } from "react-icons/io";
import Avatar from "../../assets/man.png";
import MenuOpen from "../MenuOpen/MenuOpen";
import { useResize } from "../../Hooks/useResize";

const Project = ({ data }) => {
  const [show, setShow] = useState(false);
  const date = new Date();
  const datetime = new Date(date).toLocaleString();
  const { isPhone } = useResize();

  return (
    <>
      {isPhone ? (
        <Mobile>
          <div>
            <div>
              <span>{data.projectName}</span>
              <span>Creation date: {datetime}</span>
            </div>
            <div>
              <div>
                <img src={Avatar} alt="Profile" />
              </div>
              <span>{data.assignedTo}</span>
            </div>
          </div>
          <div onClick={() => setShow(!show)}>
            <IoMdMore fontSize={35} />
            {show && <MenuOpen id={data.id} />}
          </div>
        </Mobile>
      ) : (
        <Wrapper>
          <div>
            <span>{data.projectName}</span>
            <span>Creation date: {datetime}</span>
          </div>
          <div>
            <div>
              <span>WC</span>
            </div>
            <span>{data.projectManager}</span>
          </div>
          <div>
            <div>
              <img src={Avatar} alt="Profile" />
            </div>
            <span>{data.assignedTo}</span>
          </div>
          <div>{data.status}</div>
          <div onClick={() => setShow(!show)}>
            <IoMdMore fontSize={35} />
            {show && <MenuOpen id={data.id} />}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Project;
