class Blog < ApplicationRecord
  has_many :posts, dependent: :destroy
  validates :title, :desc, presence: true
end
