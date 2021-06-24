searchBarDivId = "search-bar"
searchBarId = "search-bar-input"

function initSearchBar() {
    // Clear the search bar on load, just in case
    document.getElementById(searchBarId).value = ""
    document.getElementById(searchBarId).focus()
    searchEngine = "DuckDuckGo"
    searchUrl = "https://duckduckgo.com/?q="

    document.getElementById(searchBarId).placeholder = `what do you want to know?`
    document.getElementById(searchBarId).addEventListener("keypress", (event) => {
        if (event.key != 'Enter') return

        // Do whatever the user wants to do
        query = document.getElementById(searchBarId).value

        // If not others, then it's probably a search
        query = query.replace(/\ /g, "+")
        document.location = searchUrl + query
    })
}

initSearchBar();