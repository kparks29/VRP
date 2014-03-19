class AddNumToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :num, :integer
  end
end
