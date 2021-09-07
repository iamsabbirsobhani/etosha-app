const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("layouts/Home.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  {
    path: "/features",
    name: "Features",
    component: () => import("layouts/Features.vue"),
  },

  {
    path: "/contactus",
    name: "ContactUs",
    component: () => import("layouts/ContactUs.vue"),
  },
  {
    path: "/prerelease",
    name: "Prerelease",
    component: () => import("layouts/Prerelease.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
