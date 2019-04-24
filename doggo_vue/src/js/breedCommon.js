export function fetchBreedList () {
  //console.log(".Requesting dogApi.");
  return fetch("https://dog.ceo/api/breeds/list/all")
  //fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
  // .This is unrelated to { dog api }, I keep it here just for testing purpose.
  .then((response) => {
    if (response.ok) {
      //console.debug(".Cool, successfully get json from dogApi.");
      return response.json();

              // .For testing purpose. Use this "fixed" data for testing.
              // ========================================================
              //return new Promise((resolve, reject) => {
              //  resolve({
              //    "status": "success",
              //    "message": {
              //        "affenpinscher": [],
              //        "bulldog": [
              //            "boston",
              //            "french"
              //        ],
              //        "chow": [],
              //        "dane": [
              //            "great"
              //        ],
              //    }
              //  });
              //});
              // ========================================================
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
export function getImageSrcByBreed (mainBreed, subBreed) {
  var apiUrl;
  if (subBreed === null) {
    apiUrl = `https://dog.ceo/api/breed/${mainBreed}/images/random/1`;
  } else {
    apiUrl = `https://dog.ceo/api/breed/${mainBreed}/${subBreed}/images/random/1`;
  }

  return fetch(apiUrl)
  // .Return { promise } immediately.
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return new Promise((resolve, reject) => {reject(".{ response.ok) } is not true.");});
    }
  })
  .then((json) => {
    return new Promise((resolve, reject) => {resolve(json.message);});
  });
}
export function randomBreed (breedList) {
  /* .Generate a raondom breed (will always included main breed,
   * and sometimes included sub breed too), from given breedList. */
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
    // .Do nothing, so subBreed = null.
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
    // .{ SubBreed } might be { null }, if there is no sub breed for this main breed.
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
   * ====================== */

  var size = 0;
  for (let i in breedList) {
    size++;
  }
  return size;
}
