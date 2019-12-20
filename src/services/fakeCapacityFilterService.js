export const capacityFilters = [
  { _id: "1001", capFilter: 2000 },
  { _id: "1002", capFilter: 3000 },
  { _id: "1003", capFilter: 4000 }
];

export function getCapacityFilters() {
  return capacityFilters.filter(g => g);
}
