class RemoveScreenNameFromResponses < ActiveRecord::Migration[5.1]
  def change
    remove_column :responses, :screen_name

  end
end
