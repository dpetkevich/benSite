class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.decimal :phoneNumber, precision: 12, scale: 0

      t.timestamps null: false
    end
  end
end
