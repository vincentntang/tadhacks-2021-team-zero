from googletrans import Translator

# # Translate
translator = Translator()
translation = translator.translate("Der Himmel ist blau und ich mag Bananen", dest='en')

# # Output
print(translation.text)
