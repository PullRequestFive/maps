class SpotsController < ApplicationController
  def new
  end

  def create
    @spot = Spot.new(post_params)
    @spot.save

    redirect_to @spot
  end

  def show
    @spot = Spot.find(params[:id])
  end

  private
  def post_params
    params.require(:spot).permit(:title, :text)
  end
end
