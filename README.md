# use-cat-api

> React hook to fetch data from [the cat-api](https://thecatapi.com/)

[![NPM](https://img.shields.io/npm/v/use-cat-api.svg)](https://www.npmjs.com/package/use-cat-api) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-cat-api
```

## Usage

```jsx
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

```

## License

MIT © [berzerk-interactive](https://github.com/berzerk-interactive)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
