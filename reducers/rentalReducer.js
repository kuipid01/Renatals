export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
 
  title: "",
  rentCategory: "",
  tags: [],
  desc: "",
  amenities: { kitchen: "", rooms: "", carParks: "", toilets: "",desc:'' },
  coverImage:'',
  images:[],
  prices:{
    daily:'',
    monthly:'',
    yearly:''
  }
};


export const rentalReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        coverImage: action.payload.coverImage,
        images: action.payload.images,
      };
    case "ADD_FEATURE":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_FEATURE":
      return {
        ...state,
        tags: state.tags.filter(
          (tag) => tag !== action.payload
        ),
      };
      case "CHANGE_AMENITIES":
        return {
          ...state,
          amenities: {
            ...state.amenities,
            [action.payload.name]: action.payload.value,
          },
        };
      case "CHANGE_PRICES":
        return {
          ...state,
          prices: {
            ...state.prices,
            [action.payload.name]: action.payload.value,
          },
        };
      case "CLEAR_STATE":
      return INITIAL_STATE; // Reset the state to its initial values

  
    default:
      return state;
  }
};