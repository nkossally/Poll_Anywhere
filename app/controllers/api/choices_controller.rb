class Api::ChoicesController < ApplicationController

  # def create
  #   @choice = Choice.new(choice_params)
  #   if @choice.save
  #     render :show
  #   else
  #     render json: @choice.errors.full_messages, status: 422
  #   end
  # end

  def create
    broken = false
    @choices = []
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
    choice = choice.find_by(id: params[:id])
    if choice
      choice.destroy
    end
  end

  def choice_params
    debugger
    params.require(:choiceArr).permit()
  end

  # def choice_params
  #   params.require(:choice).permit(:body, :poll_id)
  # end

end