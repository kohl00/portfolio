class ContactMailer < ApplicationMailer
	#default from: "portfolio_contact@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact.subject
  #
  def contact(email,content,phone_number)
  	@email =  email
  	@content = content
  	@phone = phone_number

    mail(to: "edwin.kohlbrenner@gmail.com", subject: "Contact Message from your Portfolio", from: @email )
  end
end
