class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user if user
    return nil
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_token!
    current_user = user
  end

  def logout()
    
    current_user.reset_token!
    session[:session_token] = nil
  end

  def require_login
    render json: { base: ['invalid credentials'] }, status: 401 unless logged_in?
  end

end
