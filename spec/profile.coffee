describe 'Profile', ->
  setupFixtures = ->
    setFixtures """
                  ID: <input type="text" name="id"><br>
                  <input type="text" name="first_name">
                  <input type="text" name="last_name">
                  <input type="text" name="age">
                  <button name="save">Save</button>
                  <button name="fetch">Fetch</button>
                """

  setStoreSpy = ->
    spyOn(LocalStorageWrapper, 'store')

  setId = (id) ->
    $('[name=id]').val(id)

  clickSave = ->
    $('[name=save]').click()

  bindProfile = ->
    new Profile().bind()

  it 'saves first_name to local storage on save click', ->
    setupFixtures()

    storeSpy = setStoreSpy()
    setId(1)
    $('[name=first_name]').val('John')

    bindProfile()
    clickSave()

    expect(storeSpy).toHaveBeenCalledWith("1", {first_name: 'John', last_name: '', age: ''})

  it 'saves last_name', ->
    setupFixtures()

    storeSpy = setStoreSpy()
    setId(1)
    $('[name=last_name]').val('Doe')
    bindProfile()
    clickSave()

    expect(storeSpy).toHaveBeenCalledWith("1", {first_name: '', last_name: 'Doe', age: ''})

  it 'saves if they drive', ->
    setupFixtures()

    storeSpy = setStoreSpy()
    setId(1)
    $('[name=age]').val('28')
    bindProfile()
    clickSave()

    expect(storeSpy).toHaveBeenCalledWith("1", {first_name: '', last_name: '', age: '28'})

  clickFetch = ->
    $('[name=fetch]').click()

  setFetchSpy = ->
    spyOn(LocalStorageWrapper, 'get').andReturn({first_name: 'John', last_name: 'Doe', age: '28'})

  it 'fetches data with id on fetch click', ->
    setupFixtures()
    setId(1)

    fetchSpy = setFetchSpy()
    bindProfile()
    clickFetch()

    expect(fetchSpy).toHaveBeenCalledWith('1')

  it 'populates the first name', ->
    setupFixtures()
    setId(1)

    setFetchSpy()
    bindProfile()
    clickFetch()

    expect($('[name=first_name]').val()).toEqual('John')

  it 'populates the last name', ->
    setupFixtures()
    setId(1)

    setFetchSpy()
    bindProfile()
    clickFetch()

    expect($('[name=last_name]').val()).toEqual('Doe')

  it 'populates age', ->
    setupFixtures()
    setId(1)

    setFetchSpy()
    bindProfile()
    clickFetch()

    expect($('[name=age]').val()).toEqual('28')












