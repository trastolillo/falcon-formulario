import {
  Label,
  GrupoInput,
  IconoValidacion,
  LeyendaError,
  Input as I,
} from '../elementos/Formularios';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export type ValorValidacion = {
  campo: string;
  valido: boolean | null;
};

type Props = {
  tipo: string;
  label: string;
  placeholder: string;
  leyendaError: string;
  expresionRegular: string;
  estado: ValorValidacion;
  setEstado: React.Dispatch<React.SetStateAction<ValorValidacion>>;
};

const Input: React.FC<Props> = ({
  label,
  placeholder,
  tipo,
  leyendaError,
  expresionRegular,
  estado,
  setEstado,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstado({ ...campo });
  };
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <GrupoInput>
        <I
          type={tipo}
          placeholder={placeholder}
          id={label}
          value={estado.campo}
          onChange={onChange}
        />
        <IconoValidacion icon={faCheckCircle} />
      </GrupoInput>
      <LeyendaError>{leyendaError}</LeyendaError>
    </div>
  );
};

export default Input;
