import os
import time
import pyaudio
import playsound
from gtts import gTTS
import openai
import speech_recognition as sr

api_key ="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"

lang ="en"

openai.api_key = api_key

while True:
    def get_audio():
        r = sr.Recognizer()
        with sr.Microphone(device_index=2) as source:
            audio = r.listen(source)
            said =""
            try:

                said = r.recognize_google(audio)
                print(said)

                if "MG" in said:
                completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": said}])
                text = completion.choise[0].message.content
                speech = gTTS(text=text, lang=lang, slow=False, tld="com.au")
                speech.save("main.py")
                playsound.playsound("main.py")

            except Exception as err:   
                print(f"Exception: {err}")    

            return said    
        return None

    get_audio()           




