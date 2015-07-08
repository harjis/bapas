module CacheKey
  extend ActiveSupport::Concern

  module ClassMethods
    def cache_key_for_all
      count          = self.to_s.constantize.count
      max_updated_at = self.to_s.constantize.maximum(:updated_at).try(:utc).try(:to_s, :number)
      name           = self.to_s.pluralize(2).downcase
      "#{name}/all-#{count}-#{max_updated_at}"
    end
  end
end
