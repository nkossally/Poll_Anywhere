class AdjustActiveColumnOfPolls < ActiveRecord::Migration[5.1]
  def change
    change_column :polls, :active, :boolean, null: false

  end
end
