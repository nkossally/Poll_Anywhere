class Api::ChoicesController < ApplicationController



  def create
    broken = false
    @choices = []
    if (params[:choiceArr])
      params[:choiceArr].each do |choice|
        newChoice = Choice.new({body: choice, poll_id: params[:poll_id]})
        if newChoice.save
          @choices.push(newChoice)
        else
          render json: newChoice.errors.full_messages, status: 422
          broken = true
          break
        end
      end
    end
    @poll = Poll.find_by(id: params[:poll_id])
    render "api/polls/show" unless broken
  end

  def show
    @choice = Choice.find_by(id: params[:id])
    if(@choice)
      render :show
    else
      render json: ["choice not found"], status: 404
    end
  end

  def index
    @choices = Choice.all
    render :index
  end

  def destroy
    choice = Choice.find_by(id: params[:id])
    if choice
      choice.destroy
    end
  end


end