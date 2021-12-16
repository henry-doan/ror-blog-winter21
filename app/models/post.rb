class Post < ApplicationRecord
  belongs_to :blog

  validates :title, :body, :mins, presence: true
  validates :mins, numericality: { only_integer: true }
end
