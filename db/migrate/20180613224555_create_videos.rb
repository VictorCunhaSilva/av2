class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string    :titulo
      t.text      :descricao
      t.string    :url
      t.string    :tag


      t.timestamps null: false
    end
  end
end
