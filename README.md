# Kirk-images
A collection of Kirk Images for you to download or use as an API 


# Basic Usage
Simply go to the github [link](https://jtmc-g3.github.io/Kirk-images)


# API like usage

Here is some basic python code that prints a random image

```
async def kirk():
    try:
        response = requests.get("https://jtmc-g3.github.io/Kirk-images/images.json")
        
        if response.status_code == 200:
            data = response.json()
            images = data.get('images', [])
            
            if images:
                random_image = random.choice(images)
                
                image_url = f"https://jtmc-g3.github.io/Kirk-images/{random_image}"
                
                print(image_url)
```
This prints a random kirkified image from the url (sorry if it syntax errors. i wrote it in the readme)
