let domainName = 'li'

function getBook(query) {

  chrome.storage.sync.get({
    coustomDomain: 'li',
  }, function (items) {
    if (typeof items.coustomDomain !== 'undefined') {
      domainName = items.coustomDomain
    }

    let newUrl = `https://libgen.${domainName}/index.php?req=${query}&columns%5B%5D=t&columns%5B%5D=a&columns%5B%5D=s&columns%5B%5D=y&columns%5B%5D=p&columns%5B%5D=i&objects%5B%5D=f&objects%5B%5D=e&objects%5B%5D=s&objects%5B%5D=a&objects%5B%5D=p&objects%5B%5D=w&topics%5B%5D=l&topics%5B%5D=c&topics%5B%5D=f&topics%5B%5D=a&topics%5B%5D=m&topics%5B%5D=r&topics%5B%5D=s&res=25&filesuns=all`
    chrome.tabs.create({ url: newUrl })
  })
}

chrome.contextMenus.create({
  type: 'normal',
  title: 'Search Libgen for "%s"',
  id: 'Find book',
  contexts: ["selection"],
  onclick: function (info, tab) {
    getBook(info.selectionText)
  }
})