class Prospect < ApplicationRecord
  has_one :prospect_status

  validates :name, presence: true
  validates :company_name, presence: true
  validates :linkedin_url, presence: true

  def get_status
    if self.prospect_status.nil?
      @status_id = 0 # or handle the situation in a specific way
    else
      @status_id = self.prospect_status
    end
    ProspectStatus.statuses.key(@status_id).gsub(/_/, " ").capitalize
  end
end
