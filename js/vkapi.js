'use strict';

var ASKER = ASKER || {};

ASKER.init = function() {

  //получаем flashVars, значения - http://vk.com/dev/apps_init
  var parts=document.location.search.substr(1).split("&");
  var flashVars={}, curr;

  for (var i=0; i<parts.length; i++) {
      curr = parts[i].split('=');
      flashVars[curr[0]] = curr[1];
  };

  // получаем viewer_id из полученных переменных
  ASKER.userId = flashVars['viewer_id'];
  setVkVariables(ASKER.userId);

};

VK.init(function() {
  ASKER.init();
}, function() {
   console.log('vk API fail');
}, '5.21');



function setVkVariables(uid) {
  VK.api('users.get', {user_ids:uid, test_mode: 1}, function(r) {
    ASKER.vkUser = {
      firstName: r.response[0].first_name,
      lastName: r.response[0].last_name
    };
  });

  VK.api('friends.get', {user_id:uid, order:'hints', fields: 'nickname,sex,photo_50,photo_100,photo_200_orig,online', test_mode: 1}, function(r) {
    ASKER.vkFriends = r.response.items;
  });

  VK.api('audio.get', {owner_id:uid, test_mode: 1}, function(r) {
    ASKER.vkAudio = r.response.items;
  });
};
