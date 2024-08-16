class Prospect < ApplicationRecord
  validates :name, presence: true
  validates :company_name, presence: true
  validates :linkedin_url, presence: true
end
