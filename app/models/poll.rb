class Poll < ApplicationRecord
  validates :body, :category, :user_id, presence: true
  validates :category, inclusion: { in: %w(multiple_choice free_response) }
  validates :active, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :group
  has_many :choices

  def choice_ids
    self.choices.map{|choice| choice.id}
  end


end
