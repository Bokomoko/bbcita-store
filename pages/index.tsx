import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import Nav from "../components/nav"
export default function Home(): NextPage {
  const [session, loading] = useSession()

  return (
    <div>
      <Nav>
        {!session && (<div className="text-3xl">
          Not signed in <br />
          <button onClick={(): Promise<void> => signIn()}>Sign in</button>
        </div>)}
        {session && (<div className="text-3xl">
          Signed in as {session.user.email} <br />
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>)}
      </Nav>
      < div className={styles.container}>

        <img src="./bybbcita.png" alt="bbcitalogo"></img>
        <h1>Página em construção</h1>
        <h2>Em breve, bbcita store</h2>
      </div>
    </div >
  )
}
