class AlterSpotsWithLocation < ActiveRecord::Migration
  def change
    change_table :spots do |t|
      t.float :lat
      t.float :long
    end
  end
end
