import hasOwnProperty from "shared/hasOwnProperty";
import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";

const RESERVER_PROPS = {
  key: true,
  ref: true,
  __selt: true,
  __source: true
}

function hasValidKey(config){
  return config.key !== undefined;
}

function hasValidRef(config){
  return config.ref !== undefined;
}

function ReactElement(type, key, ref, props){

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type, 
    key, 
    ref, 
    props
  }
}

export function jsxDEV(type, config){
  debugger
  let propName;
  const props = {};
  let key = null;
  let ref = null;

  if(hasValidKey(config)){
    key = config.key
  }

  if(hasValidRef(config)){
    ref = config.ref
  }

  for(propName in config){
    if(
      hasOwnProperty.call(config, propName) && // 不需要取原型上的属性
      !RESERVER_PROPS.hasOwnProperty(propName)
      ){
      props[propName] = config[propName]
    }
  }

  return ReactElement(type, key, ref, props);
}
