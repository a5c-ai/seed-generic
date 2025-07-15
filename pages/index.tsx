import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>A5C Zero to Demo</title>
        <meta name="description" content="Build an entire project from scratch using a5c" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh',
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <h1>Welcome to A5C Zero to Demo</h1>
        <p>
          This is a template repository to help you build projects from scratch using the A5C agent system.
        </p>
        <p>
          Follow the instructions in the README.md to get started.
        </p>
      </main>
    </div>
  )
}

export default Home