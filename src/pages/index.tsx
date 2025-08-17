import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/fitbit.jpg"
          height="85"
          width="250"
          alt="Fitbit Blog"
        />
        <h1>Fitbit Blog</h1>
        <h2>
          Learnig to develop with {' '}
          <ExtLink
            href="https://dev.fitbit.com/build/tutorials/"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            Fitbit SDK
          </ExtLink>
        </h2>
        <Features />
      </div>
    </>
  )
}
