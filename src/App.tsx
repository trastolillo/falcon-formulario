import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeError,
  MensajeExito,
} from './elementos/Formularios';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input, { ValorValidacion } from './componentes/Input';
import { useState } from 'react';

const App = () => {
  const estadoInicial: ValorValidacion = { campo: '', valido: null };
  const [usuario, setUsuario] = useState(estadoInicial);
  const [nombre, setNombre] = useState(estadoInicial);
  const [password, setPassword] = useState(estadoInicial);
  const [password2, setPassword2] = useState(estadoInicial);
  const [correo, setCorreo] = useState(estadoInicial);
  const [telefono, setTelefono] = useState(estadoInicial);

  return (
    <main>
      <Formulario action=''>
        <Input
          tipo='text'
          label='Usuario'
          placeholder='Caquis123'
          leyendaError='El usuario no puede tener espacios'
          expresionRegular=''
          estado={usuario}
          setEstado={setUsuario}
        />
        <Input
          tipo='password'
          label='Contraseña'
          placeholder='Contraseña'
          leyendaError='LoremImpum'
          expresionRegular=''
          estado={password}
          setEstado={setPassword}
        />
        <ContenedorTerminos>
          <Label>
            <input type='checkbox' name='terminos' id='terminos' />
            Acepto los términos y condiciones
          </Label>
        </ContenedorTerminos>
        {false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error</b>: Porfi, rellena el formulario correctamente
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type='submit'>Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente, cuate</MensajeExito>
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};

export default App;
