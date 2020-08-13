# use-ipcoords

React Hook for getting coords over IP using geoJS

▶︎ [demo](https://gords.github.io/use-ipcoords/)

[![NPM](https://img.shields.io/npm/v/use-ipcoords.svg)](https://www.npmjs.com/package/use-ipcoords) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

Using `yarn`:

```bash
yarn add use-ipcoords
```

Using `npm`:

```bash
npm i use-ipcoords --save
```

## Usage

```javascript
import React from 'react';
import { useIpCoords } from 'use-ipcoords'


export const Example = () => {
    const {
        latitudeIp,
        longitudeIp
    } = useCoords();

    return (
        <div>
            latitudeIp : {latitudeIp}<br />
            longitudeIp : {longitudeIp}<br />
        </div>
    );

};
```

## License

MIT © [Gords](https://github.com/Gords)

---
