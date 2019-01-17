class AdjustActiveColumnOfPolls < ActiveRecord::Migration[5.1]
  def change
    change_column :polls, :active, null: false

  end
end
