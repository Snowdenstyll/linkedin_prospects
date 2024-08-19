# frozen_string_literal: true

module Prospects
  class ShowComponent < ReactComponent
    def initialize(prospect)
      @prospect = prospect
      super("Prospect", raw_props: @prospect)
    end

    def props
      {
        prospect: @prospect,
        prospect_status: @prospect.get_status
        # name: @prospect.name,
        # company_name: @prospect.company_name,
        # linkedin_url: @prospect.linkedin_url,
      }
    end
  end
end
