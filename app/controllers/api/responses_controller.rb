require 'pusher'

class Api:: ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      Pusher.trigger("response_channel", 'respond', {})
      render :show
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def show
    @response = Response.find_by(id: params[:id])
    if(@response)
      render :show
    else
      render json: ["response not found"], status: 404
    end
  end

  def index
    @responses = Response.all
    render :index
  end

  def destroy
    response = Response.find_by(id: params[:id])
    if response
      response.destroy
    end
  end

  def response_params
    params.require(:response).permit(:body, :user_id, :choice_id)
  end

end