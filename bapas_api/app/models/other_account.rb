class OtherAccount < ActiveRecord::Base
  has_many :payments
  belongs_to :category

  def name=(string)
    string.upcase!
    self['name'] = string
  end
end
