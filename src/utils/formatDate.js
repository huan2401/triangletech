export const formatDate = (date) => {
  const temp = new Date(date);
  const day = temp.toLocaleString("en-US", {
    day: "2-digit",
    timeZone: "UTC",
  });
  const month = temp.toLocaleString("en-US", {
    month: "2-digit",
    timeZone: "UTC",
  });
  const year = temp.toLocaleString("en-US", {
    year: "numeric",
    timeZone: "UTC",
  });
  return `${day}/${month}/${year}`;
};
export const getHour = (date) => {
  const temp = new Date(date);
  const hour = temp.toLocaleString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${hour}`;
};

export const getDay = (date) => {
  const temp = new Date(date);
  const day = temp.toLocaleString("en-US", {
    day: "2-digit",
    timeZone: "UTC",
  });
  return `${day}`;
};

export const getMonth = (date) => {
  const temp = new Date(date);
  const month = temp.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return `${month}`;
};
