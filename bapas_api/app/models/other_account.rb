class OtherAccount < BaseModel
  has_many :payments
  belongs_to :category

  def name=(string)
    string.upcase!
    self['name'] = string
  end
end
