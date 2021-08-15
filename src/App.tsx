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

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{3,15}$/, // Letras, numeros, guion y guion_bajo
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
          leyendaError='El usuario tiene que ser de 4 a 16 dígitos'
          expresionRegular={expresiones.usuario}
          estado={usuario}
          setEstado={setUsuario}
          valido
        />
        <Input
          tipo='text'
          label='Nombre'
          placeholder='Nombre'
          leyendaError='Nombre inválido'
          expresionRegular={expresiones.nombre}
          estado={nombre}
          setEstado={setNombre}
          valido
        />
        <Input
          tipo='password'
          label='Contraseña'
          placeholder='Contraseña'
          leyendaError='De cuatro a doce caracteres'
          expresionRegular={expresiones.password}
          estado={password}
          setEstado={setPassword}
          valido
        />
        <Input
          tipo='password2'
          label='Repetir ontraseña'
          placeholder='Contraseña'
          leyendaError='Las contraseñas deben coincidir'
          estado={password2}
          setEstado={setPassword2}
          valido
        />
        <Input
          tipo='email'
          label='Correo'
          placeholder='correo@correo.com'
          leyendaError='Tienes que introducir una dirección de correo válida'
          expresionRegular={expresiones.correo}
          estado={correo}
          setEstado={setCorreo}
          valido
        />
        <Input
          tipo='email'
          label='Teléfono'
          placeholder='555123223'
          leyendaError='7 a 14 números'
          expresionRegular={expresiones.telefono}
          estado={telefono}
          setEstado={setTelefono}
          valido
        />

        <ContenedorTerminos>
          <Label valido>
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
