class Group < ApplicationRecord
  has_many :users, through: :users_groups
  has_many :messages
end