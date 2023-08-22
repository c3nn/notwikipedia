let url = window.location.href.replace("https://","").replace("http://","").replace("notwikipedia.org/","")
if(!url.startsWith("wiki/")){
	window.location.replace("http://notwikipedia.org/404/");
}

console.log(url)
