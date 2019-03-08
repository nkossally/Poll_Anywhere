class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            Group.create({title: "Ungrouped", user_id: @user.id})
            render :show
        else
            render json: [ @user.errors.full_messages ], status: 422
        end
    end

    def index
        @users = User.all
    end

    def show
        @user = User.find_by(id: params[:id])
        if(@user)
          render :show
        else
          render json: ["User not found"], status: 404
        end
      end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :phone_number)
    end
    
end