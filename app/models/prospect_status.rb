class ProspectStatus < ApplicationRecord
  belongs_to :prospect
  enum status: [ :new_prospect, :qualified, :converted, :lost, :unqualified, :follow_up, :referral, :lead, :contacted, :meeting, :proposal, :negotiation, :closed_won, :closed_lost, :dead, :pending ]

  def get_status
    ProspectStatus.statuses.key(self.status)
  end
end
