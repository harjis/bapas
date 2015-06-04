class OtherAccount < ActiveRecord::Base
  has_many :payments

  def name=(string)
    string.upcase!
    self['name'] = string
  end
end
