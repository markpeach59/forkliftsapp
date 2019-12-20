export const engTypes = [
  { _id: "2001", name: "Electric" },
  { _id: "2002", name: "Diesel" },
  { _id: "2003", name: "Gas" },
  { _id: "2004", name: "Warehouse" },
  { _id: "200", name: "Reach" }
];

export function getEngTypes() {
  return engTypes.filter(g => g);
}
