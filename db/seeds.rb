# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'csv'


csv_text = File.read(Rails.root.join('lib', 'seeds', 'linkedin_cio_data.csv'))
csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')
csv.each do |row|
  Prospect.find_or_create_by!(name: row['Name'], company_name: row['Company'], linkedin_url: row['Url'])
end


@status_arr = [ "new_prospect", "qualified", "converted", "lost", "unqualified", "follow_up", "referral", "lead", "contacted", "meeting", "proposal", "negotiation", "closed_won", "closed_lost", "dead", "pending" ]
@status_arr.each do |status|
  ProspectStatus.find_or_create_by!(status: status)
end
