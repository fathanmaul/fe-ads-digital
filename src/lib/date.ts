function getLocalDate(): string {
  const date = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
}

export { getLocalDate };
