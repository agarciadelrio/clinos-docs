const loadJSONData = async (url, opt=undefined) => {
  if(url in localStorage) {
    try {
      return JSON.parse(localStorage.getItem(url))
    } catch (e) {
      console.error(e)
      alert(e)
      return []
    }
  }
  const data = await (await fetch(url,opt)).json()
  localStorage.setItem(url,JSON.stringify(data))
  return data
}
export { loadJSONData }