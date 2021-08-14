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
import { isExpressionWithTypeArguments } from 'typescript';

const App = () => {
  const estadoInicial: ValorValidacion = { campo: '', valido: null };
  const [usuario, setUsuario] = useState(estadoInicial);
  const [nombre, setNombre] = useState(estadoInicial);
  const [password, setPassword] = useState(estadoInicial);
  const [password2, setPassword2] = useState(estadoInicial);
  const [correo, setCorreo] = useState(estadoInicial);
  const [telefono, setTelefono] = useState(estadoInicial);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  return (
    <main>
      <Formulario action=''>
        <Input
          tipo='text'
          label='Usuario'
          placeholder='Caquis123'
          leyendaError='El usuario no puede tener espacios'
          expresionRegular={expresiones.usuario}
          estado={usuario}
          setEstado={setUsuario}
          valido
        />
        <Input
          tipo='password'
          label='Contraseña'
          placeholder='Contraseña'
          leyendaError='LoremImpum'
          expresionRegular={expresiones.password}
          estado={password}
          setEstado={setPassword}
          valido
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
