import { FormattedMessage } from "react-intl";

const Translate = (id,value = {}) =>{
 return <FormattedMessage id={id} values={{...value}} />    
}

export default Translate;