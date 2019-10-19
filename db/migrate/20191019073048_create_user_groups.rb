class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groups do |t|
      t.integer     :users_id
      t.integer     :groups_id
      t.timestamps    null: false
    end
  end
end
