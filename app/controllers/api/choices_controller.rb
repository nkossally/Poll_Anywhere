class Api:: ChoicesController < ApplicationController

  def create
    @choice = Choice.new(choice_params)
    if @choice.save
      render :show
    else
      render json: @choice.errors.full_messages, status: 422
    end
  end

  # def create
  #   debugger
  #   choice_params[:choiceArr].each do |choice|
  #     newChoice = Choice.new({body: choice[:body], poll_id: choice_params[:poll][:id]})
  #     if newChoice.save
  #     else
  #       render json: newChoice.errors.full_messages, status: 422
  #       break
  #     end
  #   end
  # end

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

  # def choice_params
  #   debugger
  #   params.require(:choiceArr).permit()
  # end

  def choice_params
    params.require(:choice).permit(:body, :poll_id)
  end

end