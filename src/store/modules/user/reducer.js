import produce from 'immer'

const INITIAL_STATE = {
  profile: null,
  loading: false,
  company: null
}

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/UPDATE_PROFILE_REQUEST': {
        draft.loading = true
        break
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.company = action.payload.company
        draft.loading = false
        break
      }
      case '@user/CHOOSE_COMPANY': {        
        draft.company = action.payload.company
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.profile
        break
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null
        break
      }
      default:
    }
  })
}
