class Request < ActiveRecord::Base
	validates :phoneNumber, length: { is: 10 }
end
