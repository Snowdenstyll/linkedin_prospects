class ProspectsController < ApplicationController
  def index
    # @prospects = Prospect.all
    @prospects = Prospect.limit(10)
  end

  def show
    # puts params[:id]
    @prospect = Prospect.find(params[:id])
  end
end
