class Api:: PollsController < ApplicationController

  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      render :show
    else
      render json: @poll.errors.full_messages, status: 422
    end
  end

  def show
    @poll = Poll.find_by(id: params[:id])
    if(@poll)
      render :show
    else
      render json: ["Poll not found"], status: 404
    end
  end

  def index
    @polls = Poll.all
    render :index
  end

  def destroy
    poll = Poll.find_by(id: params[:id])
    if poll
      poll.destroy
    end
  end

  def poll_params
    params.require(:poll).permit(:body, :type, :active, :user_id, :group_id)
  end

end