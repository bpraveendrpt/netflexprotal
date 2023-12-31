export const logo ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
//export const authar_logo ="https://avatars.githubusercontent.com/u/53850436?s=96&v=4";

export const authar_logo ="https://occ-0-90-92.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"

export const bg_image ="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/e89fdb2e-c0bd-46d9-855d-c63a951376cf/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
       Authorization:  "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [
  {identifer: "en", name: "English"}, 
  {identifer: "hindi", name: "Hindi"}, 
  {identifer: "spanish", name: "Spanish"} 
];

export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY
