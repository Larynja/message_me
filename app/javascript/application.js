// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// Import external dependencies
import "jquery";
import "semantic-ui";

// import '@hotwired/turbo-rails';
// import '@hotwired/stimulus';
// import '@hotwired/stimulus-loading';

// // Import the ActionCable module
// import '@rails/actioncable';

// import "./controllers"
// import "./channels"


// window.jQuery = jquery
// window.$ = jquery

console.log("Hello from application.js");
// alert("JavaScript is working!");

$('.ui.dropdown')
  .dropdown()
;

// $(document).on('turbo:load', function() {
//     console.log('loaded turbo links')
//     $('.ui.dropdown').dropdown();
//     $('.message .close').on('click', function() { 
//      $(this).closest('.message').transition('fade')     
//     });
// })


// // add auto scroll to bottom in messages
// $(document).on('turbo:load', function() {
//     if ($('#messages').length > 0) {
//     $('#messages').scrollTop($('#messages')[0].scrollHeight);
//     }
//   })