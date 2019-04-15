export function fetchBreedList () {
  //console.log(".Requesting dogApi.");
  return fetch("https://dog.ceo/api/breeds/list/all")
  //fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
  // .This is unrelated to { dog api }, I keep it here just for testing purpose.
  .then((response) => {
    if (response.ok) {
      //console.log(".Cool, successfully get json from dogApi.");
      return response.json();
    } else {
      return new Promise ((resolve, reject) => {
        reject("None");
      });
    }
  })
  .catch((reject) => {
    return new Promise ((resolveInner, rejectInner) => {
      rejectInner({
        "rejectTitle": "Bad, failed to get json from dogApi.",
        "rejectContent": reject,
      });
    });
  });

  // .The exact copy of actual data.
  // .I keep this for no reason, these can always fetched by fetch api.
  // ==================================
  //{
  //    "status": "success",
  //    "message": {
  //        "affenpinscher": [],
  //        "african": [],
  //        "airedale": [],
  //        "akita": [],
  //        "appenzeller": [],
  //        "basenji": [],
  //        "beagle": [],
  //        "bluetick": [],
  //        "borzoi": [],
  //        "bouvier": [],
  //        "boxer": [],
  //        "brabancon": [],
  //        "briard": [],
  //        "bulldog": [
  //            "boston",
  //            "french"
  //        ],
  //        "bullterrier": [
  //            "staffordshire"
  //        ],
  //        "cairn": [],
  //        "cattledog": [
  //            "australian"
  //        ],
  //        "chihuahua": [],
  //        "chow": [],
  //        "clumber": [],
  //        "cockapoo": [],
  //        "collie": [
  //            "border"
  //        ],
  //        "coonhound": [],
  //        "corgi": [
  //            "cardigan"
  //        ],
  //        "cotondetulear": [],
  //        "dachshund": [],
  //        "dalmatian": [],
  //        "dane": [
  //            "great"
  //        ],
  //        "deerhound": [
  //            "scottish"
  //        ],
  //        "dhole": [],
  //        "dingo": [],
  //        "doberman": [],
  //        "elkhound": [
  //            "norwegian"
  //        ],
  //        "entlebucher": [],
  //        "eskimo": [],
  //        "frise": [
  //            "bichon"
  //        ],
  //        "germanshepherd": [],
  //        "greyhound": [
  //            "italian"
  //        ],
  //        "groenendael": [],
  //        "hound": [
  //            "afghan",
  //            "basset",
  //            "blood",
  //            "english",
  //            "ibizan",
  //            "walker"
  //        ],
  //        "husky": [],
  //        "keeshond": [],
  //        "kelpie": [],
  //        "komondor": [],
  //        "kuvasz": [],
  //        "labrador": [],
  //        "leonberg": [],
  //        "lhasa": [],
  //        "malamute": [],
  //        "malinois": [],
  //        "maltese": [],
  //        "mastiff": [
  //            "bull",
  //            "english",
  //            "tibetan"
  //        ],
  //        "mexicanhairless": [],
  //        "mix": [],
  //        "mountain": [
  //            "bernese",
  //            "swiss"
  //        ],
  //        "newfoundland": [],
  //        "otterhound": [],
  //        "papillon": [],
  //        "pekinese": [],
  //        "pembroke": [],
  //        "pinscher": [
  //            "miniature"
  //        ],
  //        "pointer": [
  //            "german",
  //            "germanlonghair"
  //        ],
  //        "pomeranian": [],
  //        "poodle": [
  //            "miniature",
  //            "standard",
  //            "toy"
  //        ],
  //        "pug": [],
  //        "puggle": [],
  //        "pyrenees": [],
  //        "redbone": [],
  //        "retriever": [
  //            "chesapeake",
  //            "curly",
  //            "flatcoated",
  //            "golden"
  //        ],
  //        "ridgeback": [
  //            "rhodesian"
  //        ],
  //        "rottweiler": [],
  //        "saluki": [],
  //        "samoyed": [],
  //        "schipperke": [],
  //        "schnauzer": [
  //            "giant",
  //            "miniature"
  //        ],
  //        "setter": [
  //            "english",
  //            "gordon",
  //            "irish"
  //        ],
  //        "sheepdog": [
  //            "english",
  //            "shetland"
  //        ],
  //        "shiba": [],
  //        "shihtzu": [],
  //        "spaniel": [
  //            "blenheim",
  //            "brittany",
  //            "cocker",
  //            "irish",
  //            "japanese",
  //            "sussex",
  //            "welsh"
  //        ],
  //        "springer": [
  //            "english"
  //        ],
  //        "stbernard": [],
  //        "terrier": [
  //            "american",
  //            "australian",
  //            "bedlington",
  //            "border",
  //            "dandie",
  //            "fox",
  //            "irish",
  //            "kerryblue",
  //            "lakeland",
  //            "norfolk",
  //            "norwich",
  //            "patterdale",
  //            "russell",
  //            "scottish",
  //            "sealyham",
  //            "silky",
  //            "tibetan",
  //            "toy",
  //            "westhighland",
  //            "wheaten",
  //            "yorkshire"
  //        ],
  //        "vizsla": [],
  //        "weimaraner": [],
  //        "whippet": [],
  //        "wolfhound": [
  //            "irish"
  //        ]
  //    }
  //}
  // ==================================
}
export function fetchImageByBreed (mainBreed, subBreed) {
  var fetchUrl;
  if (subBreed === null) {
    fetchUrl = `https://dog.ceo/api/breed/${mainBreed}/images/random/1`;
  } else {
    fetchUrl = `https://dog.ceo/api/breed/${mainBreed}/${subBreed}/images/random/1`;
  }
  return fetch(fetchUrl)
  .then((response) => {
    if (response.ok) {
            console.log("peanut 2");
      return response.json();
    } else {
            console.log("peanut 3");
      return new Promise ((resolve, reject) => {
        reject("None");
      });
    }
  })
  .then((json) => {
            console.log("peanut 4");
            console.log(`Now I getting that image url from ${json.message[0]}.`);
            var myHeader = new Headers();
            myHeader.append("Content-Type", "image/jpg");
            myHeader.append("User-Agent", "MY-UA-STRING");
            //myHeader.append("Origin", "https://dog.ceo");
            myHeader.append("Access-Control-Allow-Origin", '*');

    return fetch  (json.message[0], {
      method: "GET",
      mode: "cors",
      //headers: {
      //  "origin": "https://dog.ceo",
      //  "User-Agent": "MY-UA-STRING"
      //}
      //headers: myHeader
    });
  })
  .then((response) => {
    //if (response.ok) {
    //        console.log("peanut 5");
    //  return response.blob();
    //} else {
    //        console.log("peanut 6");
    //  return new Promise ((resolve, reject) => {
    //    reject("None");
    //  });
    //}
            return response.blob();
  })
  .catch((reject) => {
            console.log("peanut 7");
    return new Promise ((resolveInner, rejectInner) => {
      rejectInner({
        "rejectTitle": "Bad, failed to get json from dogApi.",
        "rejectContent": reject,
      });
    });
  });
}
export function randomBreed (breedList) {
  var mainBreed;
  var subBreed = null;
  var breedListMainBreedSize;
  var breedListMainBreedIndexRandom;
  var breedListSubBreedSize;
  var breedListSubBreedIndexRandom;

  // .Getting main breed.
  // =====================
  breedListMainBreedSize = sizeOfObjectInDepthOne(breedList);
  breedListMainBreedIndexRandom = Math.floor(Math.random()*breedListMainBreedSize);
  var i = 0;
  for (let crrMainBreed in breedList) {
    if (i === breedListMainBreedIndexRandom) {
      mainBreed = crrMainBreed;
      break;
    }
    i++;
  }
  // =====================

  // .Getting sub breed.
  // =====================
  breedListSubBreedSize = breedList[mainBreed].length;
  if (breedListSubBreedSize === 0) {
    subBreed = null;
  } else {
    breedListSubBreedIndexRandom = Math.floor(Math.random()*breedListSubBreedSize);
    subBreed = breedList[mainBreed][breedListSubBreedIndexRandom];
  }
  // =====================

  //console.log(mainBreed);
  //console.log(subBreed);
  //console.log(breedListMainBreedIndexRandom);
  //console.log(breedListSubBreedIndexRandom);
  return {
    mainBreed,
    subBreed
  };
}
function sizeOfObjectInDepthOne (breedList) {
  /* .Description: calculate how many elements a object has, in one level depth.
   * For example { var bar = {"a":"aa","b":"bb", "c": {"c1":"c11","c2":"c22"},"d":"dd"}; }
   * So { sizeOfObjectInDepthOne(bar) } will return "4".
   *
   * .Useless testing data.
   * ======================
   *var foo = ["a","b", "c"];
   *var bar = {"a":"aa","b":"bb", "c": {"c1":"c11","c2":"c22"},"d":"dd"};
   * ======================
   */
  var size = 0;
  for (let i in breedList) {
    size++;
  }
  return size;
}
