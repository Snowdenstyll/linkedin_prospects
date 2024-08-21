# frozen_string_literal: true

module Prospects
  class ShowTable < ReactComponent
    def initialize(prospects)
      @prospects = prospects
      super("ProspectTable", raw_props: @prospects)
    end

    def props
      {
        prospects: @prospects.map do |prospect|
          {
            name: prospect.name,
            company_name: prospect.company_name,
            linkedin_url: prospect.linkedin_url,
            status: prospect.get_status
          }
        end,
        all_statuses: ProspectStatus.all_status
      }
    end
  end
end
