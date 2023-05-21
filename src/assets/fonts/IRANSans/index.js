/**
*
*	Name:			IRAN Sans-Serif Font
*	Version:		5.0
*	Author:			Moslem Ebrahimi (moslemebrahimi.com)
*	Created on:		Dec 25, 2012
*	Updated on:		Sep 01, 2017
*	Website:		             http://fontiran.com
*	Copyright:		Commercial/Proprietary Software
--------------------------------------------------------------------------------------
فونت های ایران سن سریف یک نرم افزار مالکیتی محسوب می شود. جهت آگاهی از قوانین استفاده از این فونت ها لطفا به وب سایت (فونت ایران دات کام) مراجعه نمایید
--------------------------------------------------------------------------------------
IRAN Sans-serif fonts are considered a proprietary software. To gain information about the laws regarding the use of these fonts, please visit www.fontiran.com 
--------------------------------------------------------------------------------------
This set of fonts are used in this project under the license: (.....)
--------------------------------------------------------------------------------------
*	
**/
import localFont from "next/font/local";

const IRANSans = localFont({
  src: [
    {
      path: "./fonts/woff2/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/woff2/IRANSansWeb_Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/woff2/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/woff2/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/woff2/IRANSansWeb_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/woff2/IRANSansWeb.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
});

export default IRANSans;
