class Prospect < ApplicationRecord
  has_one :prospect_status

  validates :name, presence: true
  validates :company_name, presence: true
  validates :linkedin_url, presence: true

  def get_status
    if self.prospect_status.nil?
      ProspectStatus.statuses.key(0)
    else
      self.prospect_status.status
    end
  end
end
