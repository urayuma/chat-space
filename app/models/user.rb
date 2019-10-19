class User < ApplicationRecord
  has_many :messages
  has_many :groups, though: :user_groups
end
