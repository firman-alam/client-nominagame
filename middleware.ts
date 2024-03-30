import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from './app/_lib/auth'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('user_token')?.value

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err: Error) => {
      console.error(err.message)
    }))

  if (
    (req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/register')) &&
    !verifiedToken
  ) {
    return
  }

  if (
    (req.url.includes('/login') || req.url.includes('/register')) &&
    verifiedToken
  ) {
    return NextResponse.redirect(new URL('/users', req.url))
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
