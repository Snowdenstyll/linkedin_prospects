class ProspectsController < ApplicationController
  def index
    @prospects = Prospect.all
    # @prospects = Prospect.limit(10)
  end

  def show
    @prospect = Prospect.find(params[:id])
  end
end
