export const urlWithParams = (url: string, query: any) => {
  const queryParams = Object.keys(query)
    .filter((key) => !!query[key])
    .map((key) => {
      return `${key}=${encodeURIComponent(query[key])}`;
    })
    .join("&");

  return !!queryParams ? `${url}?${queryParams}` : url;
};
