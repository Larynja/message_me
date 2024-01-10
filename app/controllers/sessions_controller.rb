class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:session] [:username])
    if user && user.authenticate(params[:session] [:password])
      session[:user_id] = user.id
      flash[:success] = "Successfully logged in as #{user.username}"   
      redirect_to root_path
    else
      flash.now[:error] = "Login details incorrect"
      render :new, status: :unprocessable_entity
      end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "You have been logged out"
    redirect_to login_path
  end

end
