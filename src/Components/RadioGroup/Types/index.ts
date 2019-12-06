export interface RadioOptionProps {
  label: string;
  value: string;
  selected: boolean;
}

export interface RadioProps {
  Name: string;
  options: RadioOptionProps[];
  Wep_api: string;
  IsSingleSelect: boolean;
  dependentValue: string;
}

export interface CountryListProps {
  alpha3Code: string;
  name: string;
}
