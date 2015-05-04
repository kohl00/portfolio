class PagesController < ApplicationController
  
  def index
  end

  def contact_mailer
    @email = params[:email]
    @content = params[:content]
    @phone = params[:phone]
    @name = params[:name]

    ContactMailer.contact(@email,@content,@phone).deliver_now
  end

  private


end
