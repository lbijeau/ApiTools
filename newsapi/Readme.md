# Proxy for News API requests.  
## Introduction
[News API](https://newsapi.org) is a free rest API service that provides curated news feeds from a number of reputable sources.  Obtaining an API is free and easy.  The terms of use are pretty straightforward.  The purpose of this project is to:
* Provide add-on functionality to newsapi.org REST endpoints
* Protect both newsapi.org and any client app developer from malicious use of the REST endpoints
* Protect newsapi.org client app developer's API key, by securing it behind a server-side node-express https application

## Quickstart
* Obtain a newsapi [API key](https://newsapi.org/register)
* Download or clone this repository
* cd newsapi
* Create a file called .env
* Add following line to the .env file
```

API_KEY_NEWSAPI=___YOUR_API_KEY_HERE___

```
* npm install
* npm start

### ENDPOINTS
The REST endpoints and parameters are the same as those required by *News Api*, except that the API KEY does not need to be provided on the *articles* endpoint.  

## Future work
* Add support for caching to further reduce the load
* Add support for compressions
* Add support for auth headers
* Add additional filtering capabilities
* Provide mashup endpoints were data returned
