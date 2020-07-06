export const formatForBadge = (number) => {
  if (!number) return false;
  return number < 100 ? number : "+99";
};

export const formatToolBarSubMessages = (messages) => {
  if (!messages) return "You don't have new message here.";
  return `You have ${messages} unread messages.`;
};

export const sortByDate = (data, keyName) => {
  return data.sort((a, b) => new Date(b[keyName]) - new Date(a[keyName]));
};

export const sortByUnread = (data, keyName) => {
  return data.sort((a, b) => {
    if (a[keyName]) return -1;
    else if (b[keyName]) return 1;
    else return 0;
  });
};
