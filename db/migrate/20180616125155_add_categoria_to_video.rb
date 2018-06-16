class AddCategoriaToVideo < ActiveRecord::Migration
  def change
    add_column :videos, :categoria, :string
  end
end
