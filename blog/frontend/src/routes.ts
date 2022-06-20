export const routes = {
   "Home": "/",
   "About": "/about",
   "Contact": "/contact",
   "Create": "/add_post",
   "Account": "/account",
   "Blogs": "/blogs",
   "Post": "/view_post",
   "Logout": "/blogs"
};

export type RouteType = keyof typeof routes;