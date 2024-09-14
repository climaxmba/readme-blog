const storage = (() => {
  function getWishlist(): string[] {
    try {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  function setWishlist(blogs: string[]) {
    localStorage.setItem("wishlist", JSON.stringify(blogs));
  }

  function isDarkThemeEnabled(): boolean {
    const isEnabled: boolean | null = JSON.parse(
      localStorage.getItem("isDarkTheme") as string
    );

    if (isEnabled === null) {
      const isDeviceThemeDark = matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkThemeEnalbled(isDeviceThemeDark);
      return isDeviceThemeDark;
    }
    
    return isEnabled;
  }

  function setDarkThemeEnalbled(val: boolean) {
    localStorage.setItem("isDarkTheme", JSON.stringify(val));
  }

  return {
    getWishlist,
    setWishlist,
    isDarkThemeEnabled,
    setDarkThemeEnalbled,
  };
})();

export default storage;
