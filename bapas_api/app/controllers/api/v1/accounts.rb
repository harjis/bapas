module API
  module V1
    class Accounts < Grape::API
      include API::V1::Defaults

      resource :accounts do
        desc "Return all accounts"
        get "", root: :accounts do
          Account.all
        end

        desc "Return a account"
        params do
          requires :id, type: String, desc: "ID of the account"
        end
        get ":id", root: "account" do
          Account.find(permitted_params[:id])
        end
      end
    end
  end
end
