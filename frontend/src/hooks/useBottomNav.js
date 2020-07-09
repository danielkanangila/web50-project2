export const useBottomNav = () => {
  const setVisibility = (status) => {
    if (status) document.body.classList.remove("no--bottom-nav");
    else document.body.classList.add("no--bottom-nav");
  };

  return { setVisibility };
};
