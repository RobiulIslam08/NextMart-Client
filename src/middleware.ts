import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";
type Role = keyof typeof roleBasedPrivateRoutes;
const authRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/admin/],
};
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
 return NextResponse.redirect(new URL('/', request.url))
};
export const config = {
  matcher: [
    "/login", // /login রুটের জন্য
    "/register", // /register রুটের জন্য (Auth রুট, matcher এ থাকা ভালো)
    "/create-shop", // /create-shop রুটের জন্য

    // ADMIN এর নিচের সব রুটের জন্য (যেমন: /admin, /admin/dashboard, /admin/products/edit)
    "/admin/:path*",

    // USER এর নিচের সব রুটের জন্য (যেমন: /user, /user/profile, /user/settings)
    "/user/:path*",
  ],
};
