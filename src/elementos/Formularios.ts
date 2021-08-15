import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { log } from 'console';

type Props = {
  valido: boolean | null;
}

const colores = {
  borde: '#0075ff',
  error: '#bb2929',
  exito: '#1ed12d',
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label<Props>`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(p: Props) => p.valido !== null && !p.valido && css`
    color: ${colores.error};
  `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;


const Input = styled.input<Props>`
  width: 100%;
  background: #ffff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 3px solid transparent;

  :focus{
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(p: Props) => p.valido || p.valido === null
    ? css`
    border: 3px solid transparent;
  ` : css`
    border: 3px solid ${colores.error} !important;
  `}
`;

const LeyendaError = styled.p<Props>`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};

  ${(p: Props) => p.valido || p.valido === null
    ? css`
      display: none;
    `: css`
      display: block
  `}
`;

const IconoValidacion = styled(FontAwesomeIcon) <Props>`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(p: Props) => p.valido && css`
      opacity: 1;
      color: ${colores.exito};
    `}
    
    ${(p: Props) => !p.valido && css`
      opacity: 1;
      color: ${colores.error};
  `}
`;

const ContenedorTerminos = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .1s ease all;

  :hover {
    box-shadow: 3px 0 30px rgba(163, 163, 163, 1)
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  display: none;
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0 15px;
  border-radius: 3px;
  grid-column: span 2;

  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
};
