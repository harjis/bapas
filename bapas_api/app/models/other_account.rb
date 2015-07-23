class OtherAccount < BaseModel
  has_many :payments
  belongs_to :category

  scope :categoryless, -> { where(category: nil) }

  def name=(string)
    string.upcase!
    self['name'] = string
  end
end
