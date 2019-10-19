class RemoveMessageIdIdFromGroup < ActiveRecord::Migration[5.0]
  def change
    remove_column :groups, :message_id, :integer
  end
end
