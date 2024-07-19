const superbowlResults = [
    { year: "2020", result: "L" },
    { year: "2021", result: "W" },
    { year: "2022", result: "L" },
    // Add more objects as needed
];

// Function to find the year of the first superbowl win ("W" result)
function superbowlWin(resultsArray) {
    // Use Array.prototype.find() to find the first "W" result
    const winningResult = resultsArray.find(result => result.result === "W");

    // If a winning result is found, return the year
    // Otherwise, return undefined
    return winningResult ? winningResult.year : undefined;
}

// Export the function for testing purposes
module.exports = superbowlWin;// code your solution here
