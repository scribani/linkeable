import { useReducer } from "react";
import { AVATAR_URL, PERSONAL_INFO, RESET, WORK_EXP } from "../constants";

function formReducer(form, action) {
  switch (action.type) {
    case PERSONAL_INFO:
      return { ...form, ...action.personalInfo };
    case WORK_EXP:
      return { ...form, workExperience: action.experience };
    case AVATAR_URL:
      return { ...form, avatarURL: action.url };
    case RESET:
      return {
        name: "",
        phone: "",
        gender: "",
        birthday: "",
        nationality: "",
        bio: "",
        profession: "",
        workExperience: [],
        avatarURL: "",
      };
    default:
      return form;
  }
}

export default function useFormReducer() {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    phone: "",
    gender: "",
    birthday: "",
    nationality: "",
    bio: "",
    profession: "",
    workExperience: [],
    avatarURL: "",
  });

  return [state, dispatch];
}
