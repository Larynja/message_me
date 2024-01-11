class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom_channel"
  end

  
  def receive(data)
    ActionCable.server.broadcast("chatroom_channel", data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
