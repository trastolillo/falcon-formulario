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
  const [terminos, setTerminos] = useState(false);
  const [formValido, setFormValido] = useState<boolean | null>(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{3,15}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo === password2.campo) {
        setPassword2((prev) => {
          return { ...prev, valido: true };
        });
      } else {
        setPassword2((prev) => {
          return { ...prev, valido: false };
        });
      }
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      usuario.valido &&
      nombre.valido &&
      password.valido &&
      password2.valido &&
      correo.valido &&
      telefono.valido &&
      terminos
    ) {
      setFormValido(true);
      setUsuario(estadoInicial);
      setNombre(estadoInicial);
      setPassword(estadoInicial);
      setPassword2(estadoInicial);
      setCorreo(estadoInicial);
      setTelefono(estadoInicial);
      setTerminos(false);
    } else {
      setFormValido(false);
    }
  };

  return (
    <main>
      <Formulario action='' onSubmit={onSubmit}>
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
          tipo='password'
          label='Repetir contraseña'
          placeholder='Repetir contraseña'
          leyendaError='Las contraseñas deben coincidir'
          estado={password2}
          setEstado={setPassword2}
          validacionPassword2={validarPassword2}
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
          tipo='text'
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
            <input
              type='checkbox'
              name='terminos'
              id='terminos'
              checked={terminos}
              onChange={(e) => setTerminos(e.target.checked)}
            />
            Acepto los términos y condiciones
          </Label>
        </ContenedorTerminos>
        {formValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error</b>: Porfi, rellena el formulario correctamente
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type='submit'>Enviar</Boton>
          {formValido && (
            <MensajeExito>Formulario enviado exitosamente, cuate</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};

export default App;
