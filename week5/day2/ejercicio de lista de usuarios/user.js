$(function() {
  var ENDPOINT = 'https://ironhack-characters.herokuapp.com/characters';
  var LIST_SELECTOR = '.js-characters-list';
  var FORM_SELECTOR = '.js-form';

  function addUsersToList(users) {

    $(LIST_SELECTOR).append(users.map(userToHTML).join(''));
  }

  function fetchUsers() {
    $.ajax({
      type: 'GET',
      url: ENDPOINT,
      dataType: 'json',
      success: addUsersToList
    });
  }

  function userToHTML(user) {
    return '' +
      '<ul>' +
        '<li><h2>' + user.name + '</h2></li>' +
        '<li> Debt: ' + user.debt + '</li>' +
        '<li> Occupation: ' + user.occupation + '</li>' +
        '<li> Weapon: ' + user.weapon + '</li>' +
      '</ul>';
  }

  function getUserFromInputs($inputs) {
    return $.makeArray($inputs).reduce(function(result, input) {
      var $input = $(input);
      result[$input.prop('name')] = $input.val();
      return result;
    }, {});
  }

  function createUser(user, callback) {
    $.ajax({
      type: 'POST',
      url: ENDPOINT,
      success: function(response) {
        callback(response.id);
      },
      data: user,
      dataType: 'json'
    });
  }

  function getUser(userId, callback) {
    //
  }

  $(FORM_SELECTOR).on('submit', function(event) {
    event.preventDefault();
    createUser(getUserFromInputs($(this).find('input')), function(userId) {
      getUser(userId, function(user) {
        addUserToList(user);
      })
    });
  });
});
