import { Formik, useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "./Styles";
import * as Yup from "yup";
import { Button } from "../../share/Button";
import { Input } from "../../share/Input";
import { Label } from "../../share/Label";
import { Select } from "../../share/Select";
import { addProject } from "../../store/actions/projectActions";
import { connect, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";

const Createproject = ({ editProject }) => {
  const dispatch = useDispatch();
  const id = uuidv4();
  const location = useLocation();
  const [editValues, setEditValues] = useState({});
  const route = location.pathname === "/edit";
  const navigate = useNavigate();

  useEffect(() => {
    editProject.length && editProject?.map((project) => setEditValues(project));
  }, [editProject]);

  const SignupSchema = Yup.object().shape({
    projectName: Yup.string()
      .min(4, "The minimum number of characters is 4")
      .required("The Input is required"),
    description: Yup.string()
      .min(4, "The minimum number of characters is 4")
      .required("The Input is required"),
    projectManager: Yup.string().required("The Input is required"),
    assignedTo: Yup.string().required("The Input is required"),
    status: Yup.string().required("The Input is required"),
  });


  return (
    <Wrapper>
      <Formik
        enableReinitialize
        initialValues={{
          projectName: editValues?.projectName || "",
          description: editValues?.description || "",
          projectManager: editValues?.projectManager || "",
          assignedTo: editValues?.assignedTo || "",
          status: editValues?.status || "",
          id: editValues.id ? editValues.id : id,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          dispatch(addProject(values));
          navigate("/");
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <Label variant="primary">Project name</Label>
              <Input
                type="text"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values?.projectName}
                name="projectName"
                variant="primary"
              />
              {props.errors.projectName && props.touched.projectName && (
                <small>{props.errors.projectName}</small>
              )}
            </div>
            <div>
              <Label variant="primary">Description</Label>
              <Input
                type="text"
                onBlur={props.handleBlur}
                value={props.values?.description || ""}
                onChange={props.handleChange}
                name="description"
                variant="primary"
              />
              {props.errors.description && props.touched.description && (
                <small>{props.errors.description}</small>
              )}
            </div>
            <div>
              <Label variant="primary">Project manager</Label>
              <Select
                type="text"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                name="projectManager"
                readOnly
                variant="primary"
              >
                <option>
                  {route && editValues
                    ? editValues.projectManager
                    : "Select a person"}
                </option>
                <option value="Walt Cosani">Walt Cosani</option>
              </Select>
              {props.errors.projectManager && props.touched.projectManager && (
                <small>{props.errors.projectManager}</small>
              )}
            </div>
            <div>
              <Label variant="primary">Assigned to</Label>
              <Select
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                name="assignedTo"
                variant="primary"
              >
                <option value="">
                  {route && editValues
                    ? editValues.assignedTo
                    : "Select a person"}
                </option>
                <option value="Ignacio Truffa">Ignacio Truffa</option>
              </Select>
              {props.errors.assignedTo && props.touched.assignedTo && (
                <small>{props.errors.assignedTo}</small>
              )}
            </div>
            <div>
              <Label variant="primary">Status</Label>
              <Select
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                name="status"
                variant="primary"
              >
                <option value="">
                  {route && editValues ? editValues.status : "Select status"}
                </option>
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
              </Select>
              {props.errors.status && props.touched.status && (
                <small>{props.errors.status}</small>
              )}
            </div>
            <Button type="submit" variant="primary">
              {route && editProject ? "Save changes" : "Create Project"}
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  editProject: state.project.editProject,
});

export default connect(mapStateToProps)(Createproject);
