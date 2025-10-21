// /middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {

  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  });
}

// import { NextResponse } from 'next/server';

// export function middleware(request: Request) {

// const url = new URL(request.url);
// const origin = url.origin;
// const pathname = url.pathname;
// const requestHeaders = new Headers(request.headers);
// requestHeaders.set('x-url', request.url);
// requestHeaders.set('x-origin', origin);
// requestHeaders.set('x-pathname', pathname);

// return NextResponse.next({
//     request: {
//         headers: requestHeaders,
//     }
// });
// }

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const headers = new Headers(request.headers);
//   headers.set("x-current-path", request.nextUrl.pathname);
//   return NextResponse.next({ headers });
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };