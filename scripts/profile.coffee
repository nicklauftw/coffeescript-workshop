class Profile
  bind: ->
    $('[name=save]').click(=> @save())
    $('[name=fetch]').click =>
      @populate(@fetchedData())

  save: ->
    LocalStorageWrapper.store(@valueOf('id'), @data())

  fetchedData: ->
    LocalStorageWrapper.get(@valueOf('id'))

  populate: (data) ->
    $('[name=first_name]').val(data.first_name)
    $('[name=last_name]').val(data.last_name)
    $('[name=age]').val(data.age)

  data: ->
    {
      first_name: @valueOf('first_name')
      last_name:  @valueOf('last_name')
      age: @valueOf('age')
    }

  valueOf: (name) ->
    $("[name=#{name}]").val()

window.Profile = Profile
