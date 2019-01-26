class ChangeTypeColumnToCategory < ActiveRecord::Migration[5.1]
  def change
    remove_column :polls, :type
    add_column :polls, :category, :string, null:false 

  end
end
