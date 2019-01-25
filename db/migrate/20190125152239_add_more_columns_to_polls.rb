class AddMoreColumnsToPolls < ActiveRecord::Migration[5.1]
  def change
    add_column :polls, :type, :string, null: false

  end
end
