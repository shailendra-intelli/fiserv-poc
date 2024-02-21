export function convertToCustomStructure(data: any, deep = Infinity): [] {
  const result: any = [];
  for (const key in data) {
    if (deep > 1 && typeof data[key] === "object") {
      result.push({ key, data: convertToCustomStructure(data[key], deep - 1) });
    } else {
      result.push({ key, data: data[key] });
    }
  }
  return result;
}

export function convertToOriginalFormat(data: [], deep = Infinity) {
  const result: any = {};
  data.forEach((item: any) => {
    if (deep > 0 && Array.isArray(item.data)) {
      result[item.key] = convertToOriginalFormat(item.data, deep - 1);
    } else {
      result[item.key] = item.data;
    }
  });
  return result;
}
