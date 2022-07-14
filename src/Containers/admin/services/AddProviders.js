import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidateAddServiceCategory } from "./ValidateAddServicesForm";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import {
  addService,
  addServiceCategory,
  editService,
  editServiceCategory,
} from "../../../Services/serviceCategories";
import { actions as serviceCategoryActions } from "../../../Reducers/serviceCategories";
import {
  errorToast,
  getErrorObject,
  successToast,
  verifyObject,
} from "../../../utilities/utils";
import UploadPreviewAdd from "./UploadPreviewAdd";
import { Link } from "react-router-dom";
import UploadPreviewEdit from "./UploadPreviewEdit";
import { isArray, uniqueId } from "lodash";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Terill Lobo", value: "Terill Lobo" },
  { label: "Mitchelle Jackson", value: "Mitchelle Jackson" },
  { label: "Mikey Lawson", value: "Mikey Lawson" },
  { label: "Jennifer Cortell", value: "Jennifer Cortell" },
];
export default function AddProviders({ show, handleClose }) {
  const [selected, setSelected] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  return (
    <Modal
      className="right"
      show={show}
      onHide={handleClose}
      animation={false}
      id="mm"
    >
      <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
      <Modal.Body>
        <div className="mod_sec">
          <h3 className="md_txt">Add Providers</h3>
          <Form>
            <Form.Group className="mb-4 form-type pos-rel">
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Providers*"
              />
            </Form.Group>

            <Form.Group className="df" id="fxd">
              <div className="text-center">
                <Button
                  className="btn btn-theme-white pl-2 pr-2 mr-3"
                  id="formBtnCnc"
                >
                  Back
                </Button>
                <Button className="btn btn-theme pl-2 pr-2 ml-3" id="formBtn">
                  Save
                </Button>
              </div>
            </Form.Group>
          </Form>

          <h3 class="f18">Added Providers:</h3>
          <Table responsive="lg" className="table_s mb-5">
            <tbody>
              <tr>
                <td>Terill Lobo</td>
                <td>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="myBtn_d"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Mitchelle Jackson</td>
                <td>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="myBtn_d"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Mikey Lawson</td>
                <td>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="myBtn_d"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Jennifer Cortell</td>
                <td>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="myBtn_d"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}
