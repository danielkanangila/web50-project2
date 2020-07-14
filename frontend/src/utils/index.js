import moment from "moment";

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

export const getDefaultFontSize = (pa) => {
  pa = pa || document.body;
  var who = document.createElement("div");

  who.style.cssText =
    "display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em";

  who.appendChild(document.createTextNode("M"));
  pa.appendChild(who);
  var fs = [who.offsetWidth, who.offsetHeight];
  pa.removeChild(who);
  return fs;
};

export const getTextWidth = (text) => {
  const span = document.createElement("span");
  span.style =
    "display:block; padding:0; position:absolute; visibility:hidden; font-size:100%";
  span.innerText = text;
  document.body.appendChild(span);
  const width = span.clientWidth;
  document.body.removeChild(span);

  return width;
};

export const getTimeFromStringDate = (date) => {
  return moment(date, "YYYY-DD-MM, hh:mm:ss").format("hh:mm");
};
