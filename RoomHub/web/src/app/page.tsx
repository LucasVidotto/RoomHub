
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/reserve"> Reserve</Link><br/>
      <Link href="/view"> View Reserve</Link><br />
      <Link href="/login"> Login Page</Link><br />
      <Link href="/accept"> Accept Page</Link>
    </>
  )
}
