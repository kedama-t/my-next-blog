export const getLocalDateString = (UTCString: string, timeDiff = 9) => {
  const date = new Date(UTCString);
  return new Date(date.setHours(date.getHours() + timeDiff)).toLocaleDateString(
    "ja-JP",
    {
      weekday: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );
};
