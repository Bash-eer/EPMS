import {httpInstance} from "./interceptor";

/**
 *  get method functionality
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const getApi = async (path, body, params = {}) => {
    
    return await httpInstance.get(path, body, params);
  };

  export const postApi = async (path, body, params = {}) => {
    return await httpInstance.post(path, body, params);
  };

  export const putApi = async (path, body, params = {}) => {
    return await httpInstance.put(path, body, params);
  };

  export const deleteApi = async (path, body, params = {}) => {
    return await httpInstance.delete(path, body, params);
  };
  
  export const patchApi = async (path, body, params = {}) => {
    return await httpInstance.patch(path, body, params);
  };