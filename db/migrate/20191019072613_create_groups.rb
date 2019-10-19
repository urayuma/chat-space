class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string        :name
      t.integer       :user_id
      t.integer       :message_id
      t.timestamps   null: false
    end
  end
end
