const puppeteer = require('puppeteer');

let tab = []

async function goog(url) {

  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: 'example.png' });




const text = await page.$$eval("ul", options => {
  return options.map(option => {
    console.log("test")
    return option.innerText
  })
});

const text2 = text.filter(element =>{
  return element.length > 2;
});

//const text3 = text2.map(text2.replace(/[\\t]/g, ""));
//console.log(text2.delete('M'));

//nettoyer t et n
tab.push(text2)
console.log(tab)

//tab.forEach(element => console.log(element));

await browser.close();
};

module.exports = goog;