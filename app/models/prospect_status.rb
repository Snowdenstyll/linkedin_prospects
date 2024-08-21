class ProspectStatus < ApplicationRecord
  belongs_to :prospect
  enum status: [ :new_prospect, :qualified, :converted, :lost, :unqualified, :follow_up, :referral, :lead, :contacted, :meeting, :proposal, :negotiation, :closed_won, :closed_lost, :dead, :pending ]

  def get_status
    ProspectStatus.statuses.key(self.status).to_s.gsub(/_/, " ").capitalize
  end

  # Method to get all status names as human-readable strings
  def self.human_readable_statuses
    ProspectStatus.statuses.keys.map { |status| status.to_s.gsub(/_/, " ").capitalize }
  end

  def self.all_status
    ProspectStatus.statuses.keys.map(&:to_s)
  end
end
