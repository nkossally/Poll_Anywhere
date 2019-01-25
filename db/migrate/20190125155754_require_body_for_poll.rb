class RequireBodyForPoll < ActiveRecord::Migration[5.1]
  def change
    change_column :polls, :body, :string, null: false

  end
end
