# Sweet Tunes

And app for simple livecodes in later weeks of Node curriculum

### Setup 


```
yarn install
cd server

createdb sweet-tunes_development
yarn migrate:latest

```

### Additional Example: Object Composition and Scraping Trending Git Repos

Observe the `./server/src/services/GithubRepositoryScraper` for insight into the functionality and design of the class used to scrape github 


To scrape the latest rending repos:

```
cd server
yarn scraper:trendingGitRepos
```