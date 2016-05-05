class Concert < ActiveRecord::Base
	# validates :artist,:venue,:city,:date,:price,:description, presence: true
	validates :artist, presence: true
	validates :venue, presence: true
	validates :city, presence: true
	validates :date, presence: true
	validates :price, presence: true
	validates :description, presence: true
end
