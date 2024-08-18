import requests
from bs4 import BeautifulSoup

url = 'https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx?il=İstanbul/#/'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

temperature = soup.find('div', class_='anlik-sicaklik-deger ng-binding').text

print(temperature)