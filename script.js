function firstWord(s) {
  // your code here
	const trimmedStr = s.trim();
  const firstSpaceIndex = trimmedStr.indexOf(' ');

  // If no space is found, return the entire string
  if (firstSpaceIndex === -1) {
    return trimmedStr;
  }

  // Return the first word
  return trimmedStr.slice(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
