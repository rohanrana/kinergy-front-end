import validator from "validator";
import isEmpty from "lodash/isEmpty";
import { isArray } from "lodash";
// import { spaceRegex } from "../../constants/common";

export function ValidateAddServiceCategory(data) {
  console.log("data", data);
  let errors = {};

  if (data.service_name !== undefined && validator.isEmpty(data.service_name)) {
    errors.service_name = "Service name  is required";
  }
  if (data.description !== undefined && validator.isEmpty(data.description)) {
    errors.description = "Description  is required";
  }

  if (
    data.followUpAppointmentTitle !== undefined &&
    validator.isEmpty(data.followUpAppointmentTitle)
  ) {
    errors.followUpAppointmentTitle = "Follow Up title  is required";
  }

  if (
    data.initialConsultationTitle !== undefined &&
    validator.isEmpty(data.initialConsultationTitle)
  ) {
    errors.initialConsultationTitle = "Consultation title  is required";
  }
  if (data.consultationElemntArray && isArray(data.consultationElemntArray)) {
    data.consultationElemntArray.map((d) => {
      if (isEmpty(d.initialConsultationPrice.toString())) {
        errors[`initialConsultationPrice${d._id}`] = "Please enter price";
      }

      if (isEmpty(d.initialConsultationDuration.toString())) {
        errors[`initialConsultationDuration${d._id}`] = "Please enter duration";
      }
      if (!isEmpty(d.initialConsultationPrice)) {
        if (!validator.isNumeric(d.initialConsultationPrice.toString())) {
          errors[`initialConsultationPrice${d._id}`] =
            "Please enter valid price value";
        }
      }
      if (!isEmpty(d.initialConsultationDuration)) {
        if (!validator.isNumeric(d.initialConsultationDuration.toString())) {
          errors[`initialConsultationDuration${d._id}`] =
            "Please enter valid duration value";
        }
      }
    });
  }

  if (data.followUpElemntArray && isArray(data.followUpElemntArray)) {
    data.followUpElemntArray.map((d) => {
      if (isEmpty(d.followUpAppointmentPrice.toString())) {
        errors[`followUpAppointmentPrice${d._id}`] = "Please enter price";
      }

      if (isEmpty(d.followUpAppointmentDuration.toString())) {
        errors[`followUpAppointmentDuration${d._id}`] = "Please enter duration";
      }
      if (!isEmpty(d.followUpAppointmentPrice)) {
        if (!validator.isNumeric(d.followUpAppointmentPrice.toString())) {
          errors[`followUpAppointmentPrice${d._id}`] =
            "Please enter valid price value";
        }
      }
      if (!isEmpty(d.followUpAppointmentDuration)) {
        if (!validator.isNumeric(d.followUpAppointmentDuration.toString())) {
          errors[`followUpAppointmentDuration${d._id}`] =
            "Please enter valid duration value";
        }
      }
    });
  }

  // if (data.image === null) {
  //   errors.image = "Please Select and Image";
  // }

  // if (data.role === null) {
  //   errors.role = "Role is required";
  // }
  console.log("error", errors);

  return { errors, isValid: isEmpty(errors) };
}
