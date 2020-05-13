import React from 'react'
import { useCatApi } from 'use-cat-api'

const App = () => {
  const {loading, data} = useCatApi()
  if (loading) {
    return (
      <div>
        {loading}
      </div>
    )
  } else {
    return (
      <div>
      {JSON.stringify(data)}
      </div>
    )
  }

}
export default App
