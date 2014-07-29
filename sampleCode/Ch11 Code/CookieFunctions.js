function setCookie(cookieName, cookieValue, cookiePath, cookieExpires)
{
   cookieValue = escape(cookieValue);
   if (cookieExpires == "")
   {
      var nowDate = new Date();
      nowDate.setMonth(nowDate.getMonth() + 6);
      cookieExpires = nowDate.toGMTString();
   }
   if (cookiePath != "")
   {
      cookiePath = ";Path=" + cookiePath;
   }
   document.cookie = cookieName + "=" + cookieValue + 
      ";expires=" + cookieExpires + cookiePath;
}


function getCookieValue(cookieName)
{
   var cookieValue = document.cookie;
   var cookieStartsAt = cookieValue.indexOf(" " + cookieName + "=");
   if (cookieStartsAt == -1)
   {
      cookieStartsAt = cookieValue.indexOf(cookieName + "=");
   }
   if (cookieStartsAt == -1)
   {
      cookieValue = null;
   }
   else
   {
      cookieStartsAt = cookieValue.indexOf("=", cookieStartsAt) + 1;
      var cookieEndsAt = cookieValue.indexOf(";", cookieStartsAt);
      if (cookieEndsAt == -1)
      {
         cookieEndsAt = cookieValue.length;
      }
      cookieValue = unescape(cookieValue.substring(cookieStartsAt,
         cookieEndsAt));
   }
   return cookieValue;
}
