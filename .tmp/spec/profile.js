(function() {
  describe('Profile', function() {
    var bindProfile, clickFetch, clickSave, setFetchSpy, setId, setStoreSpy, setupFixtures;
    setupFixtures = function() {
      return setFixtures("ID: <input type=\"text\" name=\"id\"><br>\n<input type=\"text\" name=\"first_name\">\n<input type=\"text\" name=\"last_name\">\n<input type=\"text\" name=\"age\">\n<button name=\"save\">Save</button>\n<button name=\"fetch\">Fetch</button>");
    };
    setStoreSpy = function() {
      return spyOn(LocalStorageWrapper, 'store');
    };
    setId = function(id) {
      return $('[name=id]').val(id);
    };
    clickSave = function() {
      return $('[name=save]').click();
    };
    bindProfile = function() {
      return new Profile().bind();
    };
    it('saves first_name to local storage on save click', function() {
      var storeSpy;
      setupFixtures();
      storeSpy = setStoreSpy();
      setId(1);
      $('[name=first_name]').val('John');
      bindProfile();
      clickSave();
      return expect(storeSpy).toHaveBeenCalledWith("1", {
        first_name: 'John',
        last_name: '',
        age: ''
      });
    });
    it('saves last_name', function() {
      var storeSpy;
      setupFixtures();
      storeSpy = setStoreSpy();
      setId(1);
      $('[name=last_name]').val('Doe');
      bindProfile();
      clickSave();
      return expect(storeSpy).toHaveBeenCalledWith("1", {
        first_name: '',
        last_name: 'Doe',
        age: ''
      });
    });
    it('saves if they drive', function() {
      var storeSpy;
      setupFixtures();
      storeSpy = setStoreSpy();
      setId(1);
      $('[name=age]').val('28');
      bindProfile();
      clickSave();
      return expect(storeSpy).toHaveBeenCalledWith("1", {
        first_name: '',
        last_name: '',
        age: '28'
      });
    });
    clickFetch = function() {
      return $('[name=fetch]').click();
    };
    setFetchSpy = function() {
      return spyOn(LocalStorageWrapper, 'get').andReturn({
        first_name: 'John',
        last_name: 'Doe',
        age: '28'
      });
    };
    it('fetches data with id on fetch click', function() {
      var fetchSpy;
      setupFixtures();
      setId(1);
      fetchSpy = setFetchSpy();
      bindProfile();
      clickFetch();
      return expect(fetchSpy).toHaveBeenCalledWith('1');
    });
    it('populates the first name', function() {
      setupFixtures();
      setId(1);
      setFetchSpy();
      bindProfile();
      clickFetch();
      return expect($('[name=first_name]').val()).toEqual('John');
    });
    it('populates the last name', function() {
      setupFixtures();
      setId(1);
      setFetchSpy();
      bindProfile();
      clickFetch();
      return expect($('[name=last_name]').val()).toEqual('Doe');
    });
    return it('populates age', function() {
      setupFixtures();
      setId(1);
      setFetchSpy();
      bindProfile();
      clickFetch();
      return expect($('[name=age]').val()).toEqual('28');
    });
  });

}).call(this);
