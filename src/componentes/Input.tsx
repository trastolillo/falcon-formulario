import {
  Label,
  GrupoInput,
  IconoValidacion,
  LeyendaError,
  Input as I,
} from '../elementos/Formularios';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ValorValidacion = {
  campo: string;
  valido: boolean | null;
};

type Props = {
  tipo: string;
  label: string;
  placeholder: string;
  leyendaError: string;
  expresionRegular?: RegExp;
  valido: boolean | null;
  estado: ValorValidacion;
  setEstado: React.Dispatch<React.SetStateAction<ValorValidacion>>;
};

const Input: React.FC<Props> = ({
  label,
  placeholder,
  tipo,
  leyendaError,
  expresionRegular,
  valido,
  estado,
  setEstado,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentState: ValorValidacion = {
      campo: e.currentTarget.value,
      valido: validacion(),
    };
    setEstado(currentState);
    console.log(estado);
  };
  const validacion = (): boolean | null => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        return true;
      } else {
        return false;
      }
    }
    return null;
  };

  const seleccionIconos = (): IconProp | void => {
    if (estado.valido == null) {
      return;
    } else if (estado.valido) {
      return faCheckCircle;
    } else {
      return faTimesCircle;
    }
  };

  console.log(estado.valido);

  return (
    <div>
      <Label htmlFor={label} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <I
          type={tipo}
          placeholder={placeholder}
          id={label}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default Input;
