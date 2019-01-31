class Poll < ApplicationRecord
  validates :body, :category, :active, :user_id, presence: true
  validates :category, inclusion: { in: %w(multiple_choice free_response) }
  belongs_to :user
  # belongs_to :group
  has_many :choices

  def choice_ids
    self.choices.map{|choice| choice.id}
  end

  def response_ids
    self.responses.map{|response| response.id}
  end

end
