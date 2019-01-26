class CreateChoices < ActiveRecord::Migration[5.1]
  def change
    create_table :choices do |t|
      t.string :body, null: false
      t.integer :poll_id, null: false

      t.timestamps
    end
  end
end
