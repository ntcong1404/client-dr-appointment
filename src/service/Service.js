import publicClient from "./client/public.client";
import privateClient from "./client/private.client";

export const Login = async ({ email, password }) => {
  try {
    const res = await publicClient.post("/user/login", {
      email,
      password,
    });
    return { res };
  } catch (err) {
    return { err };
  }
};

export const Signup = async ({ formDetails }) => {
  try {
    const res = await publicClient.post("/user/register", {
      firstname: formDetails.firstname,
      lastname: formDetails.lastname,
      email: formDetails.email,
      password: formDetails.password,
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getUser = async ({ userId }) => {
  try {
    const res = await privateClient.get(`/user/getuser/${userId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async ({
  firstname,
  lastname,
  age,
  mobile,
  address,
  gender,
  email,
  password,
}) => {
  try {
    const res = await privateClient.put("/user/updateprofile", {
      firstname,
      lastname,
      age,
      mobile,
      address,
      gender,
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminSetUser = async ({ userId, isAdmin }) => {
  try {
    const res = await privateClient.put("/user/adminsetuser", {
      userId,
      isAdmin,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const bookAppointment = async ({ formDetails }) => {
  try {
    const res = await privateClient.post("/appointment/bookappointment", {
      date: formDetails.date,
      time: formDetails.time,
      doctorId: formDetails.doctor,
      clinic: formDetails.clinic,
      desc: formDetails.desc,
      reason: formDetails.reason,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllAppointments = async () => {
  try {
    const res = await privateClient.get("/appointment/getallappointments");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const appointmentAccepted = async ({ appointId }) => {
  try {
    const res = await privateClient.put("/appointment/accept", { appointId });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const appointmentCancelled = async ({ appointId }) => {
  try {
    const res = await privateClient.put("/appointment/cancel", { appointId });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const appointmentDeleted = async ({ appointId }) => {
  try {
    const res = await privateClient.delete(`/appointment/delete/${appointId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminGetAllUsers = async () => {
  try {
    const res = await privateClient.get("/user/getallusers");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminDeleteUser = async ({ userId }) => {
  try {
    const res = await privateClient.delete(`/user/delete/${userId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminGetAllDoctors = async () => {
  try {
    const res = await publicClient.get("/doctor/getalldoctors");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminAddDoctors = async ({ formDetails }) => {
  try {
    const res = await privateClient.post("/doctor/applyfordoctor", {
      name: formDetails.name,
      img: formDetails.img,
      specialty: formDetails.specialty,
      specialInterests: formDetails.specialInterests,
      language: formDetails.language,
      location: formDetails.location,
      desc: formDetails.desc,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminUpdateDoctors = async ({ formDetailsUpdate }) => {
  try {
    const res = await privateClient.put("/doctor/updatedoctor", {
      doctorId: formDetailsUpdate.doctorId,
      name: formDetailsUpdate.name,
      img: formDetailsUpdate.img,
      specialty: formDetailsUpdate.specialty,
      specialInterests: formDetailsUpdate.specialInterests,
      language: formDetailsUpdate.language,
      location: formDetailsUpdate.location,
      desc: formDetailsUpdate.desc,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminDeleteDoctor = async ({ doctorId }) => {
  try {
    const res = await privateClient.delete(`/doctor/deletedoctor/${doctorId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllServices = async () => {
  try {
    const res = await publicClient.get("/service/getallservices");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminAddServices = async ({ formDetails }) => {
  try {
    const res = await privateClient.post("/service/addservice", {
      name: formDetails.name,
      img: formDetails.img,
      desc: formDetails.desc,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminDeleteService = async ({ serviceId }) => {
  try {
    const res = await privateClient.delete(
      `/service/deleteservice/${serviceId}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminAddContentService = async ({
  showModalContentService,
  formAddContent,
}) => {
  try {
    const res = await privateClient.post("/service/addcontentservice", {
      serviceId: showModalContentService,
      title: formAddContent.title,
      description: formAddContent.description,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const adminDeleteContentService = async ({ contentId, serviceId }) => {
  try {
    const res = await privateClient.delete(
      `/service/deletecontentservice/${contentId}/${serviceId}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
