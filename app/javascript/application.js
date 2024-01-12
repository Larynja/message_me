// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// Import external dependencies
import "jquery";
import "semantic-ui";

import "@hotwired/turbo-rails"

// import '@hotwired/stimulus';
// import '@hotwired/stimulus-loading';

// // Import the ActionCable module
// import '@rails/actioncable';

import "./controllers"
import "./channels"

// document.addEventListener('turbo:submit-end', function(event) {
//   console.log('Turbo Drive handled form submission:', event);
// });

// semantic ui dropdown menu
$(document).on('turbo:load', function() {
  console.log('loaded turbo links')
  $('.ui.dropdown').dropdown()
});

// add auto scroll to bottom in messages
$(document).on('turbo:load', function() {
  if ($('#messages').length > 0) { 
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}) 