class GithubRepositoryScraper {
    constructor(){}

     generateRepoDataFromResponse(){
      const responseBody = this.requestTrendingGithubHTML()
      const $repos = this.loadHTMLIntoCheerio(responseBody)
  
      const repositoriesData = []

      $repos.each((index, element) => {
        let repoData = {}
        repoData.name = getRepoName(element)
        repoData.description = getRepoDescription(element)
        repoData.collaborators = getRepoCollaborators(element)
        repoData.language = getRepoLanguage(element)
        repositoriesData.push(repoData)
      })

      return this.repositoriesData = repositoriesData
    }

    // this method could be added just as easily to a Repository class, since the Repository class is concerned with persisting repositories to the DB
     persistRepositories(){
      this.repositoriesData.forEach(repo => {
        // persist repository
        // persist related contributors for repository, controlling for uniqueness
      })
    }

    // all methods below are effectively private

    requestTrendingGithubHTML(){
      const url = "https://github.com/trending?since=weekly"
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;
      this.response = responseBody
    }

    loadHTMLIntoCheerio(responseBody){
      const $ = cheerio.load(responseBody);
      const $body = $("body")
      return $body.find(".Box-row")
    }

   

    getRepoName(cheerioRepo){
      // ...
    }

    getRepoDescription(cheerioRepo){
      // ...
    }

    getRepoCollaborators(cheerioRepo){
      // ...
    }
   
}

export default GithubRepositoryScraper