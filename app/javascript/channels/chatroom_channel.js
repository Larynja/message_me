import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to Channel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected from Channel");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // alert("Chat is working! chatroom_channel.js");
    $('#message-container').append(data.mod_msg);
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
    console.log("message received", data.mod_msg);
  }
});
