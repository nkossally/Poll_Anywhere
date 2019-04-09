class Api:: GroupsController < ApplicationController

  def create
    @group = Group.new(
      {title: params[:group][:title], user_id: params[:user_id]}
      )
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

  def update
    broken = false
    pollIds = params[:pollIds]
    pollIds.each do |id|
      poll = Poll.find(id)
      if(! poll.update(group_id: params[:group][:id] ))
        broken = true
      end
    end
    @group = Group.find_by(id: params[:group][:id])
    unless broken
      render "api/groups/show" 
    else
      render json: ["Could not update poll"], status: 404
    end
  end

  # def group_params
  #   params.require(:group).permit(:title, :user_id)
  # end

end