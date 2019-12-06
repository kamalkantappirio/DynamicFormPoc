export interface CheckBoxOptionProps {
  label: string;
  value: string;
  selected: boolean;
  currency: string;
}

export interface CheckBoxProps {
  label: string;
  options: CheckBoxOptionProps[];
  validation: [];
  isSingleSelect: boolean;
  dependentValue: string[];
  selectedValues: string[];
}

export interface CountryListProps {
  alpha3Code: string;
  name: string;
  currencies: any[]; // Declared with type any array because it can also be null/undefined
}
