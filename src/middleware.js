import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;

  const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET || "default_super_secret_tarunyer_alo_2026";
    return new TextEncoder().encode(secret);
  };

  let payload = null;
  if (token) {
    try {
      const verified = await jwtVerify(token, getJwtSecretKey());
      payload = verified.payload;
    } catch (err) {
      // Token is invalid/expired
    }
  }

  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    if (!payload || payload.role !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Protect /dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!payload || (payload.role !== "customer" && payload.role !== "admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Prevent logged in users from accessing login/register pages
  if (pathname === "/login" || pathname === "/register") {
    if (payload) {
      if (payload.role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/login", "/register"],
};
