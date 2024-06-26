import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextFetchEvent } from "next/server";

// Custom middleware to restrict access to /api/* routes and enforce authentication
export function middleware(req: NextRequestWithAuth, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  // Restrict access to /api/* routes
  if (pathname.startsWith('/api/')) {
    // Check if the request is authenticated
    if (!req.nextauth) {
      // If not authenticated, return a 401 Unauthorized response
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // You can add additional checks here, such as verifying user roles
  }

  // Use next-auth middleware for other routes
  return withAuth({
    pages: {
      signIn: "/login",
    },
  })(req, event);
}

// Specify the routes for which the middleware should apply
export const config = {
  matcher: ["/dashbord/:path*", "/api/:path*"], // Ensure this path is correct
};
