class Api:: GroupsController < ApplicationController

  def create
    @group = Group.new(group_params)
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def show
    @group = Group.find_by(id: params[:id])
    if(@group)
      render :show
    else
      render json: ["Group not found"], status: 404
    end
  end

  def index
    @groups = Group.all
    render :index
  end

  def destroy
    group = Group.find_by(id: params[:id])
    if group
      group.destroy
    end
  end

  def group_params
    params.require(:group).permit(:title, :user_id)
  end

end