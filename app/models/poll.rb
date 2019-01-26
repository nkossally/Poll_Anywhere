class Poll < ApplicationRecord
validates :body, :category, :active, :user_id, presence: true
validates :category, inclusion: { in: %w(multiple_choice free_response) }
belongs_to :user



end
