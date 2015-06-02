class PaymentBatchParser
  attr_accessor :payments, :headers, :account
  attr_reader :parser, :separator

  def initialize(filepath)
    self.parser = FileParser.new filepath

    self.separator = "\t"
    self.payments  = []
  end

  def parse
    parser.parse

    parser.data.each_with_index do |line, i|
      self.account = Account.find_or_initialize_by(iban: parse_iban(line)) if i == 0
      next if i <= 1
      if i == 2
        parse_headers line
      else
        parse_line line
      end
    end

    payments.each do |payment_hash|
      p = Payment.new
      p.from_hash payment_hash
      p.account = account
      p.other_account = Account.find_or_initialize_by(name: payment_hash['saaja/maksaja'])

      p.save unless p.is_persisted?
    end
  end

  private

  attr_writer :parser, :separator

  def parse_iban(iban_line)
    iban_line[-19, 18]
  end

  def parse_headers(line)
    self.headers = line.split(separator)
    self.headers.map!(&:downcase)
  end

  def parse_line(line)
    line = line.strip!
    return if line.length == 0

    payment = line.split(separator)

    hash = {}
    payment.each_with_index do |column, i|
      header       = headers[i]
      hash[header] = column
    end

    payments << hash
  end
end
