import React from 'react';
import { ADMIN_FAILURE, ADMIN_REQUEST, ADMIN_SUCCESS } from './Admin.actionType';


const initialState = {
    isLoading: false,
    isError: false,  
  };



const AdminReducer = (state = initialState,{type,payload}) => {
   switch (type){
      case ADMIN_SUCCESS:{
      return {...state, isError:false,isLoading:false}
    }
    case ADMIN_FAILURE:{
        return {...state, isError:true,isLoading:false}      
      }
      case ADMIN_REQUEST:{
        return {...state, isLoading:true,isError:false}
      }  
      default :{  
        return state;
      }
    }
    
}

export default AdminReducer