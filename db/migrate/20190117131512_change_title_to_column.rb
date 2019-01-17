class ChangeTitleToColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :polls, :title
    add_column :polls, :body, :string
  end
end
