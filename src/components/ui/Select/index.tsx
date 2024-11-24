import Select, { components } from "react-select";

export interface SelectComponentProps {
  options: { value: string; label: string }[];
  placeholder?: string;
}

const customStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: "var(--black-light)", // Cor de fundo personalizada
    padding: ".625rem .75rem", // Ajuste do padding
    border: "none",
    color: "var(--gray-7)",
    cursor: "pointer",
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundImage: state.isFocused
      ? "linear-gradient(90deg, var(--blue) 0.91%, var(--black-light) 80%)"
      : "none", // Aplica gradiente apenas no hover
    backgroundColor: state.isFocused ? "transparent" : "var(--black-light)", // Remove cor de fundo padrão
    height: "3rem",
    padding: ".625rem .75rem",
    color: "var(--white-light)", // Garante a legibilidade do texto
    cursor: "pointer",
    borderLeft: state.isFocused ? "3px solid var(--blue-light)" : "none", // Adiciona borda esquerda apenas no hover
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 0, // Remove padding interno da lista
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "var(--gray-7)", // Cor do texto do placeholder
  }),
};

// Icone Dropdown Indicator personalizado
const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      {/* SVG importado direto do FIGMA!! */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.41421 0C0.523308 0 0.0771421 1.07714 0.707107 1.70711L6.29289 7.29289C6.68342 7.68342 7.31658 7.68342 7.70711 7.29289L13.2929 1.70711C13.9229 1.07714 13.4767 0 12.5858 0H1.41421Z"
          fill="url(#paint0_linear_3_385)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_385"
            x1="13.8571"
            y1="0.727273"
            x2="8.52083"
            y2="11.4826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5390E3" />
            <stop offset="1" stop-color="#1357B3" />
          </linearGradient>
        </defs>
      </svg>
    </components.DropdownIndicator>
  );
};

const SelectComponent = ({ options, placeholder }: SelectComponentProps) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        IndicatorSeparator: null,
      }}
    />
  );
};

export default SelectComponent;
