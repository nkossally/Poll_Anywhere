class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: ["invalid information"], status: 422
        end
    end

    def index
        @users = User.all
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :phone_number)
    end
    
end