(function() {
  var LocalStorageWrapper;

  LocalStorageWrapper = (function() {
    function LocalStorageWrapper() {}

    LocalStorageWrapper.prototype.store = function(key, data) {
      return window.localStorage.setItem(key, JSON.stringify(data));
    };

    LocalStorageWrapper.prototype.get = function(key) {
      return JSON.parse(window.localStorage.getItem(key));
    };

    return LocalStorageWrapper;

  })();

  window.LocalStorageWrapper = LocalStorageWrapper;

}).call(this);
