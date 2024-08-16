class HomepageController < ApplicationController
  def index
    @prospect = Prospect.find(1)
    @prospects = Prospect.all
  end
end
