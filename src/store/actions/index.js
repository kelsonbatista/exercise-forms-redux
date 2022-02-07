export const addPersonalData = (payload) => {
  return {
    type: 'ADD_PERSONAL_DATA',
    payload,
  }
}

export const addProfessionalData = (payload) => {
  return {
    type: 'ADD_PROFESSIONAL_DATA',
    payload,
  }
}
