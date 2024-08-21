class ProspectsController < ApplicationController
  def index
    # @prospects = Prospect.all
    @prospects = Prospect.limit(10)
  end

  def show
    @prospect = Prospect.find(params[:id])
  end

  def update
    @prospect = Prospect.find_by(name: params[:name])
    @prospect_status = @prospect.prospect_status.update(status: params[:status])
    # @prospect_status = @prospect.create_prospect_status(status: params[:statusIndex])

    render json:
    {
      name: @prospect.name,
      company_name: @prospect.company_name,
      linkedin_url: @prospect.linkedin_url,
      status: @prospect.get_status
    }
  end
end
