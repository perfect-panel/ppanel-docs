export { middleware } from 'nextra/locales'

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|apple-icon.png|manifest).*)'
  ]
}