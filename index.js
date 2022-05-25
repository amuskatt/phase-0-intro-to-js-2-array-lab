const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (Ralph) {
cats.push("Ralph");
}

function destructivelyPrependCat (Bob) {
    cats.unshift ("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift ();
}

function appendCat (Broom) {
    const soManyCats = [...cats, "Broom"]
    return soManyCats
}

function prependCat (Arnold) {
    const moreCats = ["Arnold", ...cats]
    return moreCats
}

function removeLastCat () {
   return cats.slice(0, 2);
   
  }

  function removeFirstCat () {
      return cats.slice(1);
  }
