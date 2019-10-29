from selenium import webdriver
import time
options = webdriver.ChromeOptions()


#1010512-66.2019.8.26.0161

preferences = {"download.default_directory": "C:/Users/rodri/Desktop/Projetos/unif"}

options.add_experimental_option("prefs", preferences)

driver = webdriver.Chrome(chrome_options=options)

driver.get("https://www.jusbrasil.com.br/consulta-processual/?ref=navbar")


time.sleep(5)
pesquisa = driver.find_element_by_css_selector("#app-root > div > div > div.Home-section.Home-header > div.Home-header-container > div > div > div > div.SearchForm-wrapper > input")
pesquisa.send_keys("50073460620194036183")
consulta = driver.find_element_by_css_selector("#app-root > div > div > div.Home-section.Home-header > div.Home-header-container > div > div > div > div.SearchForm-wrapper > button").click()
time.sleep(10)
partes = driver.find_element_by_css_selector("#app-root > div > div > div > div.LawsuitRoot-main.col-xs-12.col-md-8 > div > div.LawsuitHeader > div.LawsuitHeader-description > span").text
andamento = driver.find_element_by_css_selector("#app-root > div > div > div > div.LawsuitRoot-main.col-xs-12.col-md-8 > div > div.LawsuitRoot-list > div > div.LawsuitTimeline-list > div:nth-child(1)").text
    
with open("Output.txt", "w") as text_file:
    text_file.write("Partes envolvidas\n" + partes + "\nAndamento\n" + andamento)