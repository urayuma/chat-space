class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string        :name, null: false
      t.string        :email
      t.string        :password
      t.integer       :message_id
      t.integer       :group_id
      t.timestamps  null: false
    end
  end
end