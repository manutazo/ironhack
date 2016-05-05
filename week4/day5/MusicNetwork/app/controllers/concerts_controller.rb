class ConcertsController < ApplicationController
	
	def index
		@concerts = Concert.all
	end
	
	def show	
	end
	
	def new
		@concert = Concert.new
	end
	
	def create
		@concert = Concert.new concert_params
  		if @concert.save
  			redirect_to '/concerts'
  		else
  			render :new
  		end
  		@concert = @concert.time_entries.find(params[:id])
  		if @concert.date = Date.today 
  			puts "esta bien"
  		else 
  			puts "else"
  	end
	end

	private
	def concert_params
		params.require(:concert).permit(:artist,:venue,:city,:date,:price,:description)
	end
end
