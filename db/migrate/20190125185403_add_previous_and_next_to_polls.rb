class AddPreviousAndNextToPolls < ActiveRecord::Migration[5.1]
  def change
    add_column :polls, :previous_id, :integer 
    add_column :polls, :next_id, :integer

  end
end
