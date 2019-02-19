class AdjustPollsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :polls, :user_id
    change_column :polls, :group_id, :integer, null: false


  end
end
