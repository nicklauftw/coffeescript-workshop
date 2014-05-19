class LocalStorageWrapper
  store: (key, data) ->
    window.localStorage.setItem(key, JSON.stringify(data))

  get: (key) ->
    JSON.parse(window.localStorage.getItem(key))

window.LocalStorageWrapper = LocalStorageWrapper
