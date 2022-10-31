# Redux Persist IndexedDB Worker Storage

> [Redux Persist](https://github.com/rt2zz/redux-persist/) storage engine using IndexedDB and web workers.

## Install

```
npm install --save redux-persist-indexeddb-worker-storage
```

## Usage

```
import storage from 'redux-persist-indexeddb-worker-storage';
...

const persistConfig = {
  key: 'root',
  storage: storage('myDB'),
}
```
