class Payment < BaseModel
  belongs_to :account
  belongs_to :other_account

  validates :account, presence: true
  validates :other_account, presence: true
  validates :amount, presence: true

  def from_hash(hash)
    self.entry_date = hash['kirjauspäivä']
    self.value_date = hash['arvopäivä']
    self.payment_date = hash['maksupäivä']
    self.amount = hash['määrä']
    self.bic = hash['bic']
    self.action = hash['tapahtuma']
    self.reference = hash['viite']
    self.message = hash['viesti']
    self.card_number = hash['kortinnumero']
  end

  def amount=(amount)
    amount.sub!(',', '.') if amount.is_a?(String)
    self['amount'] = amount.to_f
  end

  def is_persisted?
    p = Payment.where(entry_date: self.entry_date)
    .where(value_date: self.value_date)
    .where(payment_date: self.payment_date)
    .where(amount: self.amount)

    return true unless p.blank?

    false
  end
end
