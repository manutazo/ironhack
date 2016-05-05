class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
    	t.text :title
    	t.text :poster
    	t.time :year
    	t.text :sinopsis

      t.timestamps null: false
    end
  end
end
