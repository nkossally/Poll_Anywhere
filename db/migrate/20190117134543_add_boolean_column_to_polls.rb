class AddBooleanColumnToPolls < ActiveRecord::Migration[5.1]
  def change
    add_column :polls, :active, :boolean
  end
end
