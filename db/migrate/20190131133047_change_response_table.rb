class ChangeResponseTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :responses, :poll_id
    remove_column :responses, :choice_id
    add_column :responses, :choice_id, :integer, null:false
    add_column :responses, :user_id, :integer, null:false

  end
end
