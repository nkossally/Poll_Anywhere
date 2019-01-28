class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.integer :poll_id, null:false
      t.integer :choice_id
      t.string :body
      t.string :screen_name, null:false

      t.timestamps

    end
  end
end
