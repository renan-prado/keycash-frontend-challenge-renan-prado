import { IFilter } from '@/store/modules/Houses/types';

export const hasFilterInList = (filterList: IFilter[], filterItem: IFilter) => {
  return filterList
    .some((filter: IFilter) =>
      filter.group === filterItem.group &&
      filter.value === filterItem.value
    );
};

export const removeFilterInList = (filterList: IFilter[], filterItem: IFilter) => {
  return filterList
    .filter((filter: IFilter) =>
      filter.group !== filterItem.group ||
      filter.value !== filterItem.value
    );
};

export const hasGroupInList = (filterList: IFilter[], group: string) =>
  filterList
    .some((filter) =>
      filter.group === group);

export const removeGroupInList = (filterList: IFilter[], group: string) =>
  filterList
    .filter((filter) =>
      filter.group !== group);

export const getGroupInList = (filterList: IFilter[], group: string) =>
  filterList
    .filter((filter) =>
      filter.group === group);

export type TFilterGroups = 'price' | 'bathrooms' | 'bedrooms' | 'parkingSpaces' | 'usableArea';

export const buildSliderFilter = (filterList: IFilter[]) => {

  let filterOrganize:any = {
    _fields: [],
  };

  // convert array to object
  filterList.forEach((filter: IFilter) => {
    const group = String(filter.group);
    if (!filterOrganize[group]) {
      filterOrganize[group] = []
      filterOrganize._fields.push(filter.group);
    }

    filterOrganize[group].push(filter)
    filterOrganize[group] = filterOrganize[group]
      .sort((a:IFilter, b:IFilter) =>
        Number(a.value) - Number(b.value));
  });

  // getMinAndMaxValues
  filterOrganize._fields.forEach((group: any) => {
    const groupList = filterOrganize[group];
    const [minValue] = groupList;
    const maxValue = groupList[groupList.length - 1];

    filterOrganize[group] = {
      group,
      name: minValue.name,
      value: [Number(minValue.value),  Number(maxValue.value)]
    }
  });

  return filterOrganize;
};

export const filterGroupList: TFilterGroups[] = [
  'price',
  'usableArea',
  'bathrooms',
  'bedrooms',
  'parkingSpaces',
];

export const filterGroupListPtBr: String[] = [
  'Preço',
  'Área útil',
  'Banheiros',
  'Quartos',
  'Vagas',
];

