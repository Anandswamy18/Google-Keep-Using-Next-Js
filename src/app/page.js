import Dashboard from './Dashboard/page'

import Providers from '@/Redux/Providers'
export default function Home() {
  
  return (
    <div>
      <Providers>
        <Dashboard/>
      </Providers>
    </div>

  )
}

