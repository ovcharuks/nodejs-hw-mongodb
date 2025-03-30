const parseType = (value) => {
  if (typeof value === 'undefined') {
    return undefined;
  }
  return value;
};

export const parseFilterParams = (query) => {
  const { type } = query;
  const parsedType = parseType(type);
  return { parseType };
};
