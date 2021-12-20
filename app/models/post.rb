class Post < ApplicationRecord
  belongs_to :blog
  has_many :comments, dependent: :destroy
  validates :title, :body, :mins, presence: true
  validates :mins, numericality: { only_integer: true }
end
