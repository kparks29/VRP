class VideosController < ApplicationController

	def welcome
	end

  def index
  	@videos = Video.all
  end

  def show
  	@video = Video.find(params[:id])
  end

  def showVR
  	@video = Video.find(params[:id])
  end

  def demo

  end
  
end
