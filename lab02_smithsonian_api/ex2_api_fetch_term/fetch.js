// Smithsonian API example code
// check API documentation for terms here: http://edan.si.edu/openaccess/apidocs/#api-search-terms

// put your API key here;
const apiKey = "";  

// Access to terms by term category (I.e. online_media_type > Images)
const termBaseURL = "https://api.si.edu/openaccess/api/v1.0/terms/";

// search: fetches an array of terms based on term category
function fetchTermsData(termCategory) {
    let url = termBaseURL + termCategory +"?api_key=" + apiKey;
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.response.terms);
      console.log(`There are ${data.response.terms.length} terms in the term category: ${termCategory}`);
    })
    .catch(error => {
      console.log(error);
    })
  }

fetchTermsData("unit_code")

/*
Task: Play around with the different categories listed here:
http://edan.si.edu/openaccess/apidocs/#api-search-terms
Questions: 
- What other media types are available? 

  >  ["3D Images", "Catalog cards", "Electronic resource", "Finding aids", "Full text documents", "Images", "Online collections", "Online exhibits", "Scanned books", "Sound recordings", "Specimen labels", "Transcripts", "Video recordings"]

- How many cultures are represented?

(4267)

- What acronyms for museums are there?

["AAA", "AAA TH", "ACM", "CFCHFOLKLIFE", "CHNDM", "FBR", "FSG", "HAC", "HMSG", "HSFA", "NAA", "NASM", "NMAAHC", "NMAH", "NMAI", "NMAfA", "NMNHANTHRO", "NMNHBIRDS", "NMNHBOTANY", "NMNHEDUCATION", "NMNHENTO", "NMNHFISHES", "NMNHHERPS", "NMNHINV", "NMNHMAMMALS", "NMNHMINSCI", "NMNHPALEO", "NPG", "NPM", "NZP", "SAAM", "SI", "SIA", "SIL"]

*/