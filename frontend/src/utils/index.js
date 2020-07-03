export const formatForBadge = (number) => {
  if (!number) return false;
  return number < 100 ? number : "+99";
};

export const formatToolBarSubMessages = (messages) => {
  if (!messages) return "You don't have new message here.";
  return `You have ${messages} unread messages.`;
};
