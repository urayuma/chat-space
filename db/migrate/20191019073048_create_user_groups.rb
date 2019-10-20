class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :users_groups do |t|
      t.integer     :users_id, null: false, foreign_key: true
      t.integer     :groups_id, null: false, foreign_key: true
      t.timestamps    null: false
    end
  end
end
