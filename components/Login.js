
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import icon from './images/dh-icon.svg'
import { useMoralis } from 'react-moralis'

function Login() {
  const {authenticate, authError} = useMoralis();
  return (
    <div className={styles.login_container}>
      <div className={styles.login_card}>
        <p>Login</p>
        <div>
          <Image src={icon} width={100} width={100}/>
        </div>
        {
          authError && (
            <p className={styles.error}>Error: {authError.name}<br/>{authError.message}</p>
          )
        }
        <div className={styles.sign_in_container}>
          <button onClick={authenticate}>Login with Moralis</button>
        </div>
      </div>
    </div>
  )
}

export default Login