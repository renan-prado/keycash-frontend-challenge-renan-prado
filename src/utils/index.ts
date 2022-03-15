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

  let priceItems = getGroupInList(filterList, 'price');
  let usableAreaItems = getGroupInList(filterList, 'usableArea');

  priceItems = priceItems.sort((a, b) => Number(a.value) - Number(b.value));
  usableAreaItems = usableAreaItems.sort((a, b) => Number(a.value) - Number(b.value));

  filterList = removeGroupInList(filterList, 'price');
  filterList = removeGroupInList(filterList, 'usableArea');

  filterList.push({
    group: 'price',
    value: [
      Number(priceItems[0].value),
      Number(priceItems[priceItems.length - 1].value)
    ],
  });

  filterList.push({
    group: 'usableArea',
    value: [
      Number(usableAreaItems[0].value),
      Number(usableAreaItems[usableAreaItems.length - 1].value)
    ],
  });

  return filterList
};

export const filterGroupList: TFilterGroups[] = [
  'price',
  'bathrooms',
  'bedrooms',
  'parkingSpaces',
  'usableArea'
];

