import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps}) => {
  /**
   * TODO: muy interesante lo que hace acá! children es el hijo. entonces lo renderea adentro de button, lo otro son todas propiedades totalmente customizable, esta demasiado customizado
   * solo ahorrarías en estilos, el resto lo tenes que tipear igual, está bueno el approach desde el challenge técnico pero me parece demasiado rebuscado, para eso hace clases y a la bosta
   * 
   */
  return <button className="custom-button" {...otherProps}>
    {children}
  </button>
}

export default CustomButton;