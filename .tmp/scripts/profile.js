(function() {
  var Profile;

  Profile = (function() {
    function Profile() {}

    Profile.prototype.bind = function() {
      $('[name=save]').click((function(_this) {
        return function() {
          return _this.save();
        };
      })(this));
      return $('[name=fetch]').click((function(_this) {
        return function() {
          return _this.populate(_this.fetchedData());
        };
      })(this));
    };

    Profile.prototype.save = function() {
      return LocalStorageWrapper.store(this.valueOf('id'), this.data());
    };

    Profile.prototype.fetchedData = function() {
      return LocalStorageWrapper.get(this.valueOf('id'));
    };

    Profile.prototype.populate = function(data) {
      $('[name=first_name]').val(data.first_name);
      $('[name=last_name]').val(data.last_name);
      return $('[name=age]').val(data.age);
    };

    Profile.prototype.data = function() {
      return {
        first_name: this.valueOf('first_name'),
        last_name: this.valueOf('last_name'),
        age: this.valueOf('age')
      };
    };

    Profile.prototype.valueOf = function(name) {
      return $("[name=" + name + "]").val();
    };

    return Profile;

  })();

  window.Profile = Profile;

}).call(this);
