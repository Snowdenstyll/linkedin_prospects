class CreateProspectStatuses < ActiveRecord::Migration[7.2]
  def change
    create_table :prospect_statuses do |t|
      t.references :prospect, null: false, foreign_key: true
      t.integer :status, default: 0, null: false
      t.timestamps
    end
  end
end
