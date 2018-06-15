class AddTumbToVideo < ActiveRecord::Migration
  def change
    add_column :videos, :tumb, :String
  end
end
