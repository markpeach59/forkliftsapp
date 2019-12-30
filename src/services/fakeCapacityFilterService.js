export const capacityFilters = [
  { _id: "1001", capFilter: 1000 },
  { _id: "1002", capFilter: 2000 },
  { _id: "1003", capFilter: 3000 },
  { _id: "1004", capFilter: 4000 },
  { _id: "1005", capFilter: 5000 },
  { _id: "1006", capFilter: 6000 },
  { _id: "1007", capFilter: 7000 },
  // { _id: "1008", capFilter: 8000 },
  { _id: "1010", capFilter: 10000 }
];

export function getCapacityFilters() {
  return capacityFilters.filter(g => g);
}
