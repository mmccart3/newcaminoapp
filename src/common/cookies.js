export function writeCookie(key, value, days) {
    let date = new Date();
    
    days = days || 7
  
    date.setDate(date.getDate() + days);
  
    const cookie = (document.cookie = key + "=" + value + "; expires" + date.toGMTString() + "; path=/");
    return cookie;
  };
  
export function getTokenFromCookie(cookieName) {
    try {
      const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);
  
      const cookie = document.cookie.match(expression)[0];
  
      return cookie;
    } catch (error) {
      console.log(error);
    }
};
