class FileParser
  attr_accessor :filepath, :data, :options
  attr_reader :encoding

  def initialize(filepath, options = {})
    attributes options
    self.encoding ||= 'UTF-8'
    self.data = []
    self.filepath = filepath
  end

  def attributes(hash)
    hash.each do |name, value|
      send("#{name}=", value)
    end
  end

  def parse
    begin
      File.open(filepath, "r") do |file|
        while (line = file.gets)
          data << line
        end
      end
    rescue => err
      puts "Exception: #{err}"
      err
    end
  end

  protected

  attr_writer :encoding
end
