export const formatTableColumns = (key: string) => {
  return key.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export const createNoColumn = (data: Array<Record<string, any>>) => {
  return data.map((item, index) => ({ ...item, no: index + 1 }));
};