module PaymentsHelper
  def write_on_disc(uploaded_io)
    filepath = Rails.root.join('public', 'uploads', uploaded_io.original_filename)
    File.open(filepath, 'wb') do |file|
      file.write(uploaded_io.read)
    end

    filepath
  end
end
