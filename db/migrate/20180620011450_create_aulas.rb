class CreateAulas < ActiveRecord::Migration
  def change
    create_table :aulas do |t|

      t.timestamps null: false
    end
  end
end
