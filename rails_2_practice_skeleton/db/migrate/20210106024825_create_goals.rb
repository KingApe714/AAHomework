class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.string :details
      t.boolean :status
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :goals, :name
  end

end
