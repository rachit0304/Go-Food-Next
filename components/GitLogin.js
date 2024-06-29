'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function GitLogin() {
  let router = useRouter();
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {router.push('/')}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="btn btn-outline-primary" onClick={() => signIn()}>Sign in via Github</button>
    </>
  )
}