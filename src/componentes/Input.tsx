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
      return expresionRegular.test(estado.campo);
    }
    return null;
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
        {estado.valido !== null && (
          <IconoValidacion
            icon={estado.valido ? faCheckCircle : faTimesCircle}
            valido={estado.valido}
          />
        )}
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default Input;
