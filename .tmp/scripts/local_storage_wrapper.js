(function() {
  var LocalStorageWrapper;

  LocalStorageWrapper = (function() {
    function LocalStorageWrapper() {}

    LocalStorageWrapper.store = function(key, data) {
      return window.localStorage.setItem(key, JSON.stringify(data));
    };

    LocalStorageWrapper.get = function(key) {
      return JSON.parse(window.localStorage.getItem(key));
    };

    return LocalStorageWrapper;

  })();

  window.LocalStorageWrapper = LocalStorageWrapper;

}).call(this);
