import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('task-website-token')?.value;

  /** Auth Guard **/
  const protectedRoutes: string[] = ['/'];
  const routesThatRequiredNoAuth: string[] = ['/login'];

  let isProtectedRoute = protectedRoutes.some((route) => pathname.includes(route));

  if (protectedRoutes[0] === '*') isProtectedRoute = true;
  routesThatRequiredNoAuth.forEach((route) => {
    if (pathname.includes(route)) isProtectedRoute = false;
  });

  if (!token && !isProtectedRoute) {
    // No Verificaitons Required {Just Render The Page}
  } else if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL(`/login`, request.url));
  } else if (token && !isProtectedRoute) {
    return NextResponse.redirect(new URL(`/`, request.url));
  }
  /***********************************************************************************/
}


export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.png|imgs|fonts|css|webfonts|favicon).*)']
}